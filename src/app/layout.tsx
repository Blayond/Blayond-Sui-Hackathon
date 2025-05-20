import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

// Assuming Geist font files are correctly set up to be imported as CSS variables
// For example, if using next/font:
// import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: 'Blayond',
  description: 'RUN LOUD. STAND PROUD.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark")}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
