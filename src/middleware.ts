import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  // User agent information
  // const agent = userAgent(req);
  // console.log(agent);
  return NextResponse.next();
}
