import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRAVEL - Visit Tokyo',
  description: 'Travel and inspire your life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}