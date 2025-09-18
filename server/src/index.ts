import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

const onlineUsers = new Map();
const demoRooms = new Set();

// In-memory storage for demo (replace with database later)
const messages = new Map();

// Demo chat messages for realistic conversation
const demoMessages = [
  {
    senderName: "Alex Chen",
    message: "Just deployed the new authentication system. Performance improvements are significant!",
    delay: 2000
  },
  {
    senderName: "Sarah Kim",
    message: "Impressive work! The login speed feels instant now. How did you optimize it?",
    delay: 4000
  },
  {
    senderName: "Alex Chen",
    message: "Implemented JWT tokens with refresh logic and added Redis caching. Also switched to bcrypt for better security.",
    delay: 6000
  },
  {
    senderName: "Sarah Kim", 
    message: "The new dashboard analytics are looking great too. User engagement is up 40%!",
    delay: 8000
  },
  {
    senderName: "Alex Chen",
    message: "That's fantastic! The real-time features are really making a difference in user experience.",
    delay: 10000
  },
  {
    senderName: "Sarah Kim",
    message: "Should we schedule a demo for the stakeholders? I think they'll be impressed with the progress.",
    delay: 12000
  },
  {
    senderName: "Alex Chen",
    message: "Absolutely! I'll prepare the presentation deck. The metrics speak for themselves.",
    delay: 14000
  }
];

// Helper functions for in-memory storage
function saveMessage(content: string, senderId: string, senderName: string, roomId: string, messageType: string = 'user') {
  if (!messages.has(roomId)) {
    messages.set(roomId, []);
  }
  
  const message = {
    content,
    sender_id: senderId,
    sender_name: senderName,
    room_id: roomId,
    message_type: messageType,
    created_at: new Date().toISOString()
  };
  
  messages.get(roomId)?.push(message);
  console.log(`Message saved: ${senderName} in ${roomId}: ${content}`);
}

function getMessages(roomId: string) {
  return messages.get(roomId) || [];
}

function clearMessages(roomId: string) {
  messages.set(roomId, []);
}

// Demo chat simulation
function startDemoChat(roomId: string) {
  if (demoRooms.has(roomId)) return;
  
  demoRooms.add(roomId);
  console.log(`Starting demo chat for room: ${roomId}`);

  demoMessages.forEach((demo, index) => {
    setTimeout(() => {
      if (!demoRooms.has(roomId)) return;
      
      try {
        saveMessage(demo.message, `demo_${index}`, demo.senderName, roomId, 'demo');
        
        const createdAt = new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        io.to(roomId).emit("receive-message", {
          senderId: `demo_${index}`,
          senderName: demo.senderName,
          message: demo.message,
          createdAt,
          isDemo: true
        });

        console.log(`Demo message sent to ${roomId}: ${demo.message}`);
      } catch (error) {
        console.error("Error sending demo message:", error);
      }
    }, demo.delay);
  });

  setTimeout(() => {
    demoRooms.delete(roomId);
    console.log(`Demo chat ended for room: ${roomId}`);
  }, 16000);
}

io.on("connection", (socket) => {
  const { userId, username } = socket.handshake.query;

  if (userId && username && typeof userId === 'string' && typeof username === 'string') {
    onlineUsers.set(userId, { username, socketId: socket.id });
    io.emit("online-users", Array.from(onlineUsers.values()));
    console.log(`User connected: ${username} (ID: ${userId})`);
    socket.emit("connected");
  } else {
    console.log("User connected without ID or username");
    return;
  }

  socket.on("join-room", ({ roomId, isDemo = false }) => {
    if (roomId && userId && username && typeof userId === 'string' && typeof username === 'string') {
      socket.join(roomId);
      
      console.log(`${username} joined room: ${roomId} (ID: ${userId}, Demo: ${isDemo})`);
      
      // Send previous messages
      const previousMessages = getMessages(roomId);
      socket.emit("previous-messages", previousMessages);
      
      io.to(roomId).emit("user-joined", `${username} has joined the room.`);

      if (isDemo) {
        setTimeout(() => startDemoChat(roomId), 1000);
      }
    } else {
      console.log("Room ID, User ID, or Username is missing");
    }
  });

  socket.on("start-demo", ({ roomId }) => {
    if (roomId) {
      startDemoChat(roomId);
    }
  });

  socket.on("stop-demo", ({ roomId }) => {
    if (roomId && demoRooms.has(roomId)) {
      demoRooms.delete(roomId);
      console.log(`Demo stopped for room: ${roomId}`);
    }
  });

  socket.on("typing", ({ roomId, senderName }) => {
    socket.to(roomId).emit("user-typing", { senderName });
  });

  socket.on("stop-typing", ({ roomId, senderName }) => {
    socket.to(roomId).emit("user-stopped-typing", { senderName });
  });

  socket.on("send-message", async ({ message, roomId }) => {
    try {
      if (message && userId && roomId && typeof userId === 'string' && typeof username === 'string') {
        saveMessage(message, userId, username, roomId, 'user');

        const createdAt = new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        io.to(roomId).emit("receive-message", {
          senderId: userId,
          senderName: username,
          message,
          createdAt,
          isDemo: false
        });
        
        console.log(`Message sent from ${username} to ${roomId}: ${message}`);
      } else {
        console.log("Message, User ID, or Room ID is missing");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      socket.emit("message-error", { error: "Failed to send message" });
    }
  });

  socket.on("clear-chat", ({ roomId }) => {
    try {
      clearMessages(roomId);
      
      if (demoRooms.has(roomId)) {
        demoRooms.delete(roomId);
      }
      
      io.to(roomId).emit("chat-cleared");
      console.log(`Chat cleared for room: ${roomId}`);
    } catch (error) {
      console.error("Error clearing chat:", error);
    }
  });

  socket.on("disconnect", () => {
    if (typeof userId === 'string') {
      onlineUsers.forEach((user, key) => {
        if (user.socketId === socket.id) {
          onlineUsers.delete(key);
        }
      });

      io.emit("online-users", Array.from(onlineUsers.values()));
      console.log(`Disconnected: ${socket.id}`);
    }
  });
});

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    onlineUsers: onlineUsers.size,
    demoRooms: demoRooms.size,
    totalRooms: messages.size
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));