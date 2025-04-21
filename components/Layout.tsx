import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Khan Catering – Halal Indian Luxury Catering in New Zealand</title>
        <meta name="description" content="Experience premium halal Indian catering across NZ with Khan Catering. Weddings, events & more in true Indian luxury." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-charcoal text-sandstone font-sans min-h-screen flex flex-col">
        <header className="sticky top-0 bg-charcoal z-50 shadow-md border-b border-bronze">
          <nav className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-4">
              <Image src="/images/logo.png" alt="Khan Logo" width={40} height={40} />
              <span className="text-xl font-bold text-saffron">Khan Catering</span>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 text-sandstone text-lg font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Who We Are</Link></li>
              <li><Link href="/team">Meet Our Team</Link></li>
              <li><Link href="/book">Book</Link></li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-curry text-xl px-2 py-1 rounded bg-bronze"
              >
                {menuOpen ? '✕' : '☰'}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#292929] rounded shadow-lg z-50">
                  <ul className="flex flex-col text-sm text-sandstone">
                    <li className="border-b border-bronze p-2"><Link href="/">Home</Link></li>
                    <li className="border-b border-bronze p-2"><Link href="/about">Who We Are</Link></li>
                    <li className="border-b border-bronze p-2"><Link href="/team">Meet Our Team</Link></li>
                    <li className="p-2"><Link href="/book">Book</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="text-center text-clay text-sm py-6 border-t border-bronze">
          <p>📞 021 116 8647 | 021 117 1077</p>
          <p>📧 support@khancatering.co.nz</p>
          <p>📍 Serving all of New Zealand</p>
          <p className="mt-2 text-xs">© 2003–2025 Khan Catering. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}