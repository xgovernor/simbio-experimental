import USERS from "@/assets/data/users.json";

export async function GET() {
  return new Response(JSON.stringify(USERS));
}
