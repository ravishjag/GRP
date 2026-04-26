import { NextResponse } from "next/server";

// Mock admin credentials - In production, use Supabase Auth or proper authentication
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "goldenrain2005";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // In production, use JWT tokens
      const token = btoa(`${username}:${Date.now()}`);
      
      return NextResponse.json({
        success: true,
        token,
        user: { username },
      });
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
