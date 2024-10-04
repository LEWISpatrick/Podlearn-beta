import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    console.log("Attempting to fetch email count...");
    const count = await db.email.count();
    console.log("Email count fetched successfully:", count);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching email count:", error);
    return NextResponse.json(
      { message: "Error fetching email count", error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
