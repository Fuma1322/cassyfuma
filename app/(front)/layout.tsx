import type { ReactNode } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FrontLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="pb-24 md:pb-0">{children}</div>
      <Footer />
    </>
  );
}
