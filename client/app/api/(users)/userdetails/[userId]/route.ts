import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ userId: string }>;
}


export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { userId } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.error();
  }
}
