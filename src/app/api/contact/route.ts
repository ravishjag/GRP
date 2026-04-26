import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, enquiry_type, message } = body;

    // Validate required fields
    if (!name || !email || !enquiry_type || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production:
    // 1. Insert into contact_messages table
    // 2. Optionally send email notification

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
