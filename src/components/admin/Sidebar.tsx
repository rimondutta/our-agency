"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface SidebarProps {
  collapsed?: boolean;
}

export default function Sidebar({ collapsed = false }: SidebarProps) {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const navItems = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: 'fas fa-tachometer-alt',
      roles: ['superadmin', 'admin', 'team_member'],
    },
    {
      label: 'My Profile',
      href: '/admin/profile',
      icon: 'fas fa-user',
      roles: ['superadmin', 'admin', 'team_member'],
    },
    {
      label: 'Team Members',
      href: '/admin/team',
      icon: 'fas fa-users',
      roles: ['superadmin'],
    },
    {
      label: 'Services',
      href: '/admin/services',
      icon: 'fas fa-cog',
      roles: ['superadmin', 'admin'],
    },
    {
      label: 'Portfolio',
      href: '/admin/portfolio',
      icon: 'fas fa-briefcase',
      roles: ['superadmin', 'admin'],
    },
    {
      label: 'Blog',
      href: '/admin/blog',
      icon: 'fas fa-pen',
      roles: ['superadmin', 'admin'],
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: 'fas fa-cog',
      roles: ['superadmin'],
    },
  ];

  const filteredItems = navItems.filter(item =>
    item.roles.includes(role || '')
  );

  return (
    <aside className={`bg-gray-900 text-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-blue-400">
            {collapsed ? 'A' : 'Admin Panel'}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {collapsed ? '' : 'Market Growth Experts'}
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {filteredItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <i className={`${item.icon} ${collapsed ? 'text-xl' : 'text-lg'}`}></i>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}