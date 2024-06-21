export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard"] };

import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

// export default function middleware(req) {}

export const config = { matcher: ["/dashboard", "/", "/event", "/contacts"] };
