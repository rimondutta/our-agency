"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: ("superadmin" | "admin" | "team_member")[];
  fallback?: ReactNode;
}

const RoleGuard = ({ children, allowedRoles, fallback = null }: RoleGuardProps) => {
  const { data: session } = useSession();
  
  if (!session?.user?.role) return <>{fallback}</>;
  
  if (allowedRoles.includes(session.user.role)) {
    return <>{children}</>;
  }
  
  return <>{fallback}</>;
};

export default RoleGuard;
