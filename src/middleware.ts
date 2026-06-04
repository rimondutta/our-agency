import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  const { pathname } = request.nextUrl;

  // Allow access to public routes
  if (pathname.startsWith('/api/admin/auth/login') || pathname.startsWith('/admin/login') ||
      pathname.startsWith('/public') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }

  // Protect all admin routes
  if (pathname.startsWith('/admin')) {
    // If not authenticated, redirect to login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Role-based access control
    const userRole = token.role;
    const userId = token.id;

    // Team management routes - superadmin only
    if (pathname.startsWith('/admin/team') ||
        pathname.startsWith('/admin/team/new') ||
        pathname.startsWith('/admin/team/[id]')) {
      if (userRole !== 'superadmin') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }

    // Services, Portfolio, Blog, Categories, Tags, Messages, Page Content routes - superadmin or admin
    if (pathname.startsWith('/admin/services') ||
        pathname.startsWith('/admin/portfolio') ||
        pathname.startsWith('/admin/blog') ||
        pathname.startsWith('/admin/posts') ||
        pathname.startsWith('/admin/categories') ||
        pathname.startsWith('/admin/tags') ||
        pathname.startsWith('/admin/messages') ||
        pathname.startsWith('/admin/page-content')) {
      if (userRole !== 'superadmin' && userRole !== 'admin') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }

    // Profile access - all authenticated users can access their own profile at /admin/profile
    if (pathname.startsWith('/admin/profile')) {
      // The /admin/profile route itself uses the session to only allow editing of the logged in user
      // No extra middleware protection is needed here based on role
    }

    // Settings route - superadmin only
    if (pathname.startsWith('/admin/settings')) {
      if (userRole !== 'superadmin') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
