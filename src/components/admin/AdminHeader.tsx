"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Calendar, Bell, Plus, Menu } from "lucide-react";

const AdminHeader = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const pathname = usePathname() || "";
  const { data: session } = useSession();
  
  const role = session?.user?.role;

  return (
    <header className="admin-header">
      <button className="mobileToggleBtn" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      
      <div className="headerActions" style={{ marginLeft: 'auto' }}>
        <div className="dateRange d-none d-md-flex">
          <Calendar size={16} />
          <span>
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}
          </span>
        </div>
        
        {(role === "superadmin" || role === "admin") && (
          <Link href="/admin/blog/new" className="addBtn">
            <Plus size={20} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
