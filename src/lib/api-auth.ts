import { auth } from "@/lib/auth-config";
import { NextResponse } from "next/server";

type Role = "superadmin" | "admin" | "team_member";

/**
 * Get the current session and optionally check role authorization.
 * Returns { session, response } — if response is not null, return it immediately.
 */
export async function getAuthSession(allowedRoles?: Role[]) {
  const session = await auth();

  if (!session?.user) {
    return {
      session: null,
      response: NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      ),
    };
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role as Role)) {
    return {
      session,
      response: NextResponse.json(
        { success: false, message: "Forbidden: insufficient permissions" },
        { status: 403 }
      ),
    };
  }

  return { session, response: null };
}
