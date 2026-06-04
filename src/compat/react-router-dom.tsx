"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import { useRouter, useParams as useNextParams, usePathname } from "next/navigation";

// Shim Link component
export const Link = React.forwardRef<HTMLAnchorElement, any>(
  ({ to, children, ...props }, ref) => {
    // If it's a hash link like #about, or standard URL, next/link works fine.
    // Replace to with href
    const href = to || "#";
    return (
      <NextLink href={href} ref={ref} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

// Shim useNavigate hook
export const useNavigate = () => {
  const router = useRouter();
  return (to: string | number) => {
    if (typeof to === "number") {
      if (to === -1) {
        router.back();
      }
    } else {
      router.push(to);
    }
  };
};

// Shim useParams hook
export const useParams = <T extends Record<string, string | string[]> = any>(): T => {
  return useNextParams() as T;
};

// Shim useLocation hook
export const useLocation = () => {
  const pathname = usePathname();
  return {
    pathname,
    search: "",
    hash: "",
    state: null,
  };
};

// Dummy NavLink shim
export const NavLink = React.forwardRef<HTMLAnchorElement, any>(
  ({ to, children, className, ...props }, ref) => {
    const href = to || "#";
    const pathname = usePathname();
    const isActive = pathname === href;

    const computedClassName =
      typeof className === "function" ? className({ isActive }) : className;

    return (
      <NextLink
        href={href}
        ref={ref}
        className={computedClassName}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);
NavLink.displayName = "NavLink";

// Dummy Route shims
export const Routes = ({ children }: any) => <>{children}</>;
export const Route = () => null;
export const Outlet = ({ children }: any) => <>{children}</>;

// Shim Navigate component
export const Navigate = ({ to }: { to: string }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [to, router]);
  return null;
};
