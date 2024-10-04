import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const existingEmail = await db.email.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { message: "Email already subscribed." },
        { status: 400 }
      );
    }

    await db.email.create({
      data: { email },
    });

    return NextResponse.json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { message: "Error subscribing. Please try again." },
      { status: 500 }
    );
  }
}
