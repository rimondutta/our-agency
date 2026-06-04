import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
  providers: [], // configured in auth-config.ts
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as any;
        session.user.avatar = token.avatar as string | undefined;
      }
      return session;
    },
  },
  trustHost: true,
} satisfies NextAuthConfig;
