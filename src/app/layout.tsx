import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Auziros Club',
  description: 'Your Loyalty Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-mylius bg-[#f6f6f6] text-auziros-blue min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
