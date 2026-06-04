import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { authConfig } from "./auth.config";
import { checkRateLimit } from "./rate-limit";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: "superadmin" | "admin" | "team_member";
      avatar?: string;
    };
  }
  interface User {
    id: string;
    role: "superadmin" | "admin" | "team_member";
    avatar?: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: "superadmin" | "admin" | "team_member";
    avatar?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const email = (credentials.email as string).toLowerCase();
        const ip = (credentials as any).ip || "global";

        const rateLimitResult = checkRateLimit(`login:${email}:${ip}`, 5, 15 * 60 * 1000);
        if (!rateLimitResult.allowed) {
          const mins = Math.ceil(rateLimitResult.resetInMs / 60000);
          throw new Error(`Too many attempts. Try again in ${mins} minutes.`);
        }

        await dbConnect();

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.isActive) {
          throw new Error("Your account has been deactivated");
        }

        const isMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isMatch) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        };
      },
    }),
  ],
});
