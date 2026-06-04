"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { 
  LayoutDashboard, User, Mail, Briefcase, FolderKanban, 
  FileText, Folder, Tag, Image as ImageIcon, Layout, 
  Users, Settings, LogOut 
} from "lucide-react";

const AdminSidebar = () => {
  const pathname = usePathname() || "";
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  const role = session?.user?.role || "team_member";

  const allNavItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard, roles: ["superadmin", "admin", "team_member"] },
    { name: "My Profile", href: "/admin/profile", icon: User, roles: ["superadmin", "admin", "team_member"] },
    { name: "Inbox", href: "/admin/messages", icon: Mail, roles: ["superadmin", "admin"] },
    { name: "Services", href: "/admin/services", icon: Briefcase, roles: ["superadmin", "admin"] },
    { name: "Portfolio", href: "/admin/portfolio", icon: FolderKanban, roles: ["superadmin", "admin"] },
    { name: "Blog Posts", href: "/admin/blog", icon: FileText, roles: ["superadmin", "admin"] },
    { name: "Categories", href: "/admin/categories", icon: Folder, roles: ["superadmin", "admin"] },
    { name: "Tags", href: "/admin/tags", icon: Tag, roles: ["superadmin", "admin"] },
    { name: "Media Library", href: "/admin/media", icon: ImageIcon, roles: ["superadmin", "admin", "team_member"] },
    { name: "Page Content", href: "/admin/page-content", icon: Layout, roles: ["superadmin", "admin"] },
    { name: "Team Members", href: "/admin/team", icon: Users, roles: ["superadmin"] },
    { name: "Settings", href: "/admin/settings", icon: Settings, roles: ["superadmin"] },
  ];

  const navItems = allNavItems.filter(item => item.roles.includes(role));

  return (
    <aside className="admin-sidebar">
      <Link href="/admin/dashboard" className="logo" style={{ padding: '24px 20px', justifyContent: 'center' }}>
        <img src="/assets/img/logo-light.png" alt="Market Growth Experts" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
      </Link>
      
      <nav className="nav">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navItem ${isActive ? "active" : ""}`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="userProfile">
        <div className="avatar">
          <img src={session?.user?.avatar || "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt="User Avatar" />
        </div>
        <div className="userInfo">
          <span className="userName">{session?.user?.name || "Admin User"}</span>
          <span className="userRole">{session?.user?.role?.replace('_', ' ') || "Agency Director"}</span>
        </div>
        <LogOut 
          size={16} 
          color="var(--text-muted)" 
          style={{ marginLeft: 'auto', cursor: 'pointer' }} 
          onClick={handleLogout} 
        />
      </div>
    </aside>
  );
};

export default AdminSidebar;
