import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, category, message } = body;

    // Validate required fields
    if (!name || !email || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production:
    // 1. Insert into cinzee_enquiries table
    // 2. Return success

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
