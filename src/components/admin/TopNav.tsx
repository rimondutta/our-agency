"use client";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function TopNav() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' });
    router.push('/admin/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {session?.user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {session?.user?.name || 'Admin'}
              </p>
              <p className="text-xs text-gray-500 capitalize">
                {session?.user?.role || 'user'}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}