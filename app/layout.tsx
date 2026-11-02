import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Club Tueste Norte',
  description: 'Panel de socios del Club Tueste Norte',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="mx-auto max-w-5xl flex-1 w-full p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
