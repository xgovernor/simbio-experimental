import { NextRequest, NextResponse } from "next/server";


/**
 * Create a new club
 */
export async function POST(request: NextRequest) {
  const res = await fetch(`${process.env.API_SERVER_URL}/clubs?context=web`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}


/**
 * Get all clubs
 */
export async function GET() {
  const res = await fetch(`${process.env.API_SERVER_URL}/clubs?context=web`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return NextResponse.json(data)
}

/**
 * Update a club
 */

/**
 * Delete a club
 */
