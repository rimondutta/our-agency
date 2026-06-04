"use client";

import React from 'react';
import NextLink from 'next/link';
import { useRouter, useParams as useNextParams, usePathname } from 'next/navigation';

export const Link = React.forwardRef<HTMLAnchorElement, any>(({ to, ...props }, ref) => {
  const dest = to || props.href || '#';
  return <NextLink href={dest} ref={ref} {...props} />;
});
Link.displayName = 'Link';

export const useParams = () => {
  return useNextParams();
};

export const useNavigate = () => {
  const router = useRouter();
  return (to: any, options?: any) => {
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
};

export const useLocation = () => {
  const pathname = usePathname();
  return { pathname, search: '', hash: '', state: null };
};

export const Navigate = ({ to }: { to: string }) => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return null;
};

export const Outlet = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};

// Shim Route and Routes components with proper typings
export const Route = (_props: {
  path?: string;
  element?: React.ReactNode;
  children?: React.ReactNode;
}) => null;

export const Routes = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
