import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // In production, validate JWT token
  // For now, just return mock data
  return NextResponse.json({
    totalSubmissions: 0,
    pendingReview: 0,
    shortlisted: 0,
    contactMessages: 0,
  });
}
