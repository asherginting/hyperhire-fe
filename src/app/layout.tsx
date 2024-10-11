import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const geistPoppins = Poppins({ subsets: ['latin'], weight: ['900'] });

export const metadata: Metadata = {
  title: 'Hyperhire Frontend',
  description: 'hyperhire assignment for frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} style={{ fontFamily: `${geistPoppins.style.fontFamily}, sans-serif` }}>
        {children}
      </body>
    </html>
  );
}
