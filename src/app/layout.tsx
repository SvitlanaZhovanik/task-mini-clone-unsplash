import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Images Gallery App',
  description: 'App to view images and collections',
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
