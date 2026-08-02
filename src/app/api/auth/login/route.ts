import { env } from "@/lib/env";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const backendResponse = await fetch(`${env.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const backendData = await backendResponse.json();

  const response = NextResponse.json(backendData, {
    status: backendResponse.status,
  });

  const cookies = backendResponse.headers.getSetCookie();

  cookies.forEach((cookie) => {
    response.headers.append("set-cookie", cookie);
  });

  return response;
};
