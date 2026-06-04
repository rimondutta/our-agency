"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  useEffect(() => {
    signOut({ callbackUrl: "/admin/login" });
  }, []);

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Logging Out...</h2>
          <p>Please wait while we sign you out.</p>
        </div>
      </div>
    </div>
  );
}
