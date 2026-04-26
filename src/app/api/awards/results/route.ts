import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // In production:
    // 1. Fetch published participants from Supabase
    // 2. Filter by category and state from query params
    // 3. Return only public fields (no email/phone)

    // Mock response
    return NextResponse.json({
      participants: [],
      total: 0,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}
