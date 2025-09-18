"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSocket } from "@/hooks/useSocket";
import { useSession } from "next-auth/react";
import axios from "axios";
import { CustomScrollArea } from "@/components/ui/custom-scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import TypingBubble from "@/components/secondary/typingbubble";
import ChatDropDownMenu from "@/components/main/chatdropdownmenu";
import { ChatSkeleton, HeaderSkeleton, MessagesSkeleton } from "@/components/secondary/loadingskeletons";
import { NoMessagesBlock } from "@/components/messages/status";
import { ChatHeader } from "@/components/main/chatheader";
import ChatInput from "@/components/main/chatinput";
import MessageBubble from "@/components/main/messagebubble";
import useRequireAuth from "@/hooks/useRequireAuth";
import UserDirectory from "@/components/main/userdirectory";

export default function ChatRoom() {
  useRequireAuth();
  const router = useRouter();
  const socket = useSocket();
  const { roomId } = useParams();
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const [receiver, setReceiver] = useState();
  const [receiverImage, setReceiverImage] = useState();
  const [hasMounted, setHasMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isOnline, setIsOnline] = useState(false);
  const [messages, setMessages] = useState<{ senderName: string; content: string; createdAt: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [viewportHeight, setViewportHeight] = useState("100vh");
  const [connectionStatus, setConnectionStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");


  useEffect(() => {
    const [id1, id2] = decodeURIComponent(
      Array.isArray(roomId) ? roomId.join("") : roomId ?? ""
    ).split("$");

    const fetchUserById = async (userId: string) => {
      try {
        const response = await axios.get(`/api/userdetails/${userId}`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          console.warn("User not found, redirecting to sign in...");
          router.push("/signin");
        } else {
          if (error instanceof Error) {
            console.error("Error fetching user data:", error.message);
          } else {
            console.error("Error fetching user data:", error);
          }
        }
        return null;
      }
    };

    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/messages?roomId=${encodeURIComponent(
            Array.isArray(roomId) ? roomId.join("") : roomId || ""
          )}`
        );
        const data = response.data;
        setMessages(
          data.map(
            (msg: {
              senderName: string;
              content: string;
              createdAt: Date;
            }) => ({
              senderName: msg.senderName,
              content: msg.content,
              createdAt: new Date(msg.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
            })
          )
        );
        scrollToBottom();

        const currentUserId = session?.user?.id;
        if (status === "loading") return;

        if (!currentUserId) {
          router.push("/signin");
          return;
        }

        const user1 = await fetchUserById(id1);
        const user2 = await fetchUserById(id2);

        if (!user1 || !user2) router.push("/signin");

        const receiverName =
          currentUserId === id1
            ? user2?.name ?? "Loading.."
            : user1?.name ?? "Loading..";
        const receiverImage =
          currentUserId === id1 ? user2?.image ?? "" : user1?.image ?? "";

        setReceiver(receiverName);
        setReceiverImage(receiverImage);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching messages:", error.message);
        } else {
          console.error("Error fetching messages:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [roomId, router, session?.user?.id, status]);


  useEffect(() => {
    if (socket && roomId) {
      socket.emit("join-room", { roomId });

      socket.on("receive-message", ({ senderName, message, createdAt }) => {
        const displayName =
          senderName === session?.user.name
            ? session?.user.name || "You"
            : senderName;
        setMessages((prev) => [
          ...prev,
          { senderName: displayName, content: message, createdAt },
        ]);
      });

      socket.on("user-typing", ({ senderName }) => {
        setTypingUser(senderName);
        setIsTyping(true);
      });

      socket.on("user-stopped-typing", () => {
        setTypingUser(null);
        setIsTyping(false);
      });

      socket.on("online-users", (users) => {
        const isOnline = users.some(
          (user: { username: string }) => user.username === receiver
        );
        setIsOnline(isOnline);
      });

      socket.on("chat-cleared", () => {
        setMessages([]);
      });

      return () => {
        socket.off("receive-message");
        socket.off("online-users");
        socket.off("user-typing");
        socket.off("user-stopped-typing");
        socket.off("chat-cleared");
      };
    }
  }, [socket, roomId, session?.user.name, receiver]);

  const handleTyping = () => {
    socket?.emit("typing", {
      roomId,
      senderName: session?.user?.name,
    });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      socket?.emit("stop-typing", {
        roomId,
        senderName: session?.user?.name,
      });
    }, 1000);
  };

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(`${window.innerHeight}px`)
    }

    updateViewportHeight()

    window.addEventListener("resize", updateViewportHeight)
    window.addEventListener("orientationchange", updateViewportHeight)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      window.removeEventListener("orientationchange", updateViewportHeight)
    }
  }, [])

  const clearChat = async () => {
    try {
      await axios.delete(`/api/messages`, { data: { roomId } });
      socket?.emit("clear-chat", { roomId });
      setMessages([]);
      toast({
        description: "Chat cleared succesfully",
      });
    } catch (error) {
      console.error("Error clearing chat:", error);
    }
  };

  useEffect(() => {
    if (socket) {

      setConnectionStatus("connecting");

      socket.on("connected", () => {
        console.log("Socket connection established");
        setConnectionStatus("connected");
      });

      socket.on("disconnect", () => {
        setConnectionStatus("disconnected");
      });

      return () => {
        socket.off("connected");
        socket.off("disconnect");
      };
    }
  }, [socket]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const senderName = session?.user.name || "Anonymous";

    if (connectionStatus === "connecting") {
      console.log("Waiting for socket to be ready...");
      setTimeout(() => sendMessage(), 100);
      return;
    }

    socket?.emit("send-message", {
      message,
      senderName,
      roomId,
    });
    setMessage("");
    console.log("Message sent:", message);
  };


  const scrollToBottom = (smooth: boolean = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    scrollToBottom(false);
  }, [loading]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <ChatSkeleton />;
  }

  if (!session) {
    return <ChatSkeleton />;
  }

  return (
    <Sheet>
      <div className="flex flex-col bg-neutral-950 overflow-hidden" style={{ height: viewportHeight }}>
        <div className="p-4 border-b border-neutral-900 flex items-center justify-between bg-neutral-950 shadow-sm z-10">
          {loading ? (
            <HeaderSkeleton />
          ) : (
            <ChatHeader
              isOnline={isOnline}
              receiverImage={receiverImage || ""}
              receiver={receiver || ""}
              connectionStatus={connectionStatus} />
          )}
          <ChatDropDownMenu clearChat={clearChat} />
        </div>
        <div className="flex-1 overflow-hidden relative">
          <CustomScrollArea className="h-full talko-pattern bg-neutral-900">
            <div className="space-y-4 py-2 pb-2">
              {loading ? (
                <MessagesSkeleton />
              ) : messages.length === 0 ? (
                <NoMessagesBlock />
              ) : (
                messages.map((msg, idx) => (
                  <MessageBubble
                    key={idx}
                    content={msg.content}
                    createdAt={msg.createdAt}
                    isSender={msg.senderName === session?.user.name}
                  />
                ))
              )}
              {isTyping && typingUser && (
                <TypingBubble />
              )}
              <div ref={messagesEndRef} />
            </div>
          </CustomScrollArea>
        </div>
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          handleTyping={handleTyping}
          handleKeyDown={handleKeyDown}
          isConnected={connectionStatus === "connected"}
        />
      </div>
      <SheetContent className="bg-neutral-950 text-white border-neutral-900 px-2 pr-4">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <CustomScrollArea className="h-full">
          <UserDirectory />
        </CustomScrollArea>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
