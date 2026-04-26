import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // In production: Fetch from Supabase
    // const { data } = await supabase.from('cinzee_enquiries').select('*').order('created_at', { ascending: false });

    return NextResponse.json({
      enquiries: [],
      total: 0,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}
