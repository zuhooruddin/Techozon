// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add any meta tags or additional head elements here */}
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
