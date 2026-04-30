import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./services/auth";

const ALLOWED_ROLES = ["OWNER", "ADMIN", "SITTER"];
const PUBLIC_ROUTES = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    console.log("Koi jaan Mia vai?");
    console.log(request.nextUrl);

    const { pathname, origin } = request.nextUrl;
    const user = await getUser();

    if(PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    if (!user) {
        return NextResponse.redirect(
            new URL(`/login?redirect=${pathname}`, origin),
        );
    }

    if (!ALLOWED_ROLES.includes(user.role)) {
        return NextResponse.redirect(
            new URL(`/login?redirect=${pathname}`, origin),
        );
    }

    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: "/dashboard",
};
