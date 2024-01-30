import { NextRequest, NextResponse } from "next/server";

function generateHybridId(request: any) {
  // Timestamp:
  const timestamp = Date.now();

  // IP address (if available in request headers):
  const ipAddress =
    request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
  const ipHash = ipAddress ? ipAddress.split(".").slice(0, 2).join("") : ""; // Use first two octets

  // Device ID (using a custom random string generator):
  const deviceId = generateRandomDeviceId();

  return `${timestamp}${ipHash}${deviceId}`;
}

function generateRandomDeviceId() {
  const characters = "abcdef0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default function middleware(req: NextRequest) {
  // User agent information
  // const agent = userAgent(req);
  // console.log(agent);

  // Request ID
  const requestId = generateHybridId(req); // Use your preferred ID generation method
  req.headers.set("x-request-id", requestId);

  return NextResponse.next();
}
