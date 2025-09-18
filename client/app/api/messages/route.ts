import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content, senderId, senderName, roomId } = body;

    const message = await prisma.message.create({
      data: {
        content,
        senderId,
        senderName,
        roomId,
      },
    });

    return NextResponse.json(message, { status: 200 });
  } catch (error) {
    console.error("Error storing message:", error);
    return NextResponse.json({ message: "Error storing message" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const roomId = req.nextUrl.searchParams.get("roomId");
    const messages = await prisma.message.findMany({
      where: { roomId: roomId ?? undefined },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ message: "Error fetching messages" }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const { roomId } = await req.json();

    if (!roomId) {
      return NextResponse.json({ message: "Room ID is required" }, { status: 400 });
    }

    const deleteMessages = await prisma.message.deleteMany({
      where: { roomId },
    });

    console.log(`Deleted ${deleteMessages.count} messages from room ${roomId}`);
    return NextResponse.json({ message: "Chat Cleared Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error clearing messages:", error);
    return NextResponse.json({ message: "Failed to Clear Messages" }, { status: 500 });
  }
}

