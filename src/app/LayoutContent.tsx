"use client";

import { usePathname } from 'next/navigation';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith('/auth');
  const isdashboardRoute = pathname?.startsWith('/my-dashboard');

  return (
    <>
      {isAuthRoute || !isdashboardRoute && <Header />}
      {children}
      {isAuthRoute || !isdashboardRoute && <Footer />}
    </>
  );
}
export default LayoutContent;