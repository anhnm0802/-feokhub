import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { cookies } = request;
  const token = cookies.get("accessToken");
  if (token) {
    console.log("test");
  }
}
