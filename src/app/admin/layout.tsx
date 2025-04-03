'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/layout/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const [isClient, setIsClient] = useState(false);

  // This prevents hydration mismatch by only rendering after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle authentication state
  useEffect(() => {
    if (status === 'unauthenticated' && !isLoginPage) {
      // Use window.location for a full page reload to ensure session is established
      window.location.href = '/admin/login';
    }
  }, [status, isLoginPage]);

  // Show loading state only during the initial client-side hydration
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e43d30]"></div>
      </div>
    );
  }

  // For the login page, render without the admin navigation
  if (isLoginPage) {
    return <>{children}</>;
  }

  // For other admin pages, render with the admin navigation
  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1 md:pl-64">
        <main className="flex-1 bg-gray-100">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 