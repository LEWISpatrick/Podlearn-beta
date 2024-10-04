import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const count = await db.email.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching email count:", error);
    return NextResponse.json(
      { message: "Error fetching email count" },
      { status: 500 }
    );
  }
}
