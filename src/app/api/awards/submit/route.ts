import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      full_name,
      age,
      category,
      village_district,
      state,
      talent_description,
      email,
      phone,
    } = body;

    // Validate required fields
    if (!full_name || !age || !category || !village_district || !state || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production:
    // 1. Upload photo and video to Supabase Storage
    // 2. Insert record into participants table
    // 3. Return success

    // Mock response
    return NextResponse.json({
      success: true,
      message: "Submission received",
      id: crypto.randomUUID(),
    });
  } catch {
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}
