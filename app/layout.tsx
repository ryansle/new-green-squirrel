import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Squirrel Collective',
  description: 'We only carry what we smoke, and we love to give you free shit. Welcome to the club.',
  keywords: ['Green Squirrel', 'Green Squirrel Collective', 'Best Weed in NYC', 'nyc weed delivery', 'best bong store Brooklyn', 'bong store', 'brooklyn new york weed', 'brooklyn bong store', 'weed delivery', 'weed nyc', 'thc', 'where to buy carts in nyc', 'the glass shop', 'the glass shop brooklyn', 'the glass shop bk', 'cannabus', 'the green speakeasy', 'green speakeasy', 'buy weed nyc', 'buy weed'],
  openGraph: {
    images: 'https://i.imgur.com/cLfPczL.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
