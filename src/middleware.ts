import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request)

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/auth/login", request.url))
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: "/app"
}