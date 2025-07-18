import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Trickles',
    template: '%s | Trickles',
  },
  description: 'Trickles is a social microjournal platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
