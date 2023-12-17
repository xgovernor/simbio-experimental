import USERS from "@/assets/data/users.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(USERS));
}
