"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import UserAccountNav from "../shared/UserAccountNav";
import { UserSkeleton } from "../secondary/loadingskeletons";
import SignInButton from "../shared/SignInButoon";

interface User {
  id: string;
  name: string;
  image: string;
}

export default function UserDirectory() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChat = (selectedUserId: string) => {
    const currentUserId = session?.user?.id;
    if (!currentUserId) router.push("/signin");
    const roomId = [currentUserId, selectedUserId].sort().join("$");
    if (!currentUserId) {
      router.push("/signin");
    } else {
      router.push(`/room/${roomId}`);
    }
  };

  return (
    <div className="mt-8 mx-auto max-w-2xl px-4">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
        <Link href={"/"}>
          <h1 className="text-xl font-medium text-white">Chats</h1>
        </Link>
        {session?.user ? <UserAccountNav user={session.user} /> : <SignInButton text={"Sign In"} />}
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(15)].map((_, index) => (
            <UserSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="space-y-px">
          {users
            .filter((user) => user.id !== session?.user?.id)
            .map((user) => (
              <button
                onClick={() => handleChat(user.id)}
                key={user.id}
                className="flex items-center w-full px-3 py-4 hover:bg-neutral-800/40 transition-colors rounded-md"
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  quality={99}
                  src={user.image || "/pfp.png"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />

                <div className="flex-1 text-start">
                  <h2 className="text-sm font-medium text-white">{user.name}</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Start a conversation</p>
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
