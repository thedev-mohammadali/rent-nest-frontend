import { NextRequest, NextResponse } from "next/server";

const proxy = (request: NextRequest) => {
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/dashboard/:path*"],
};
