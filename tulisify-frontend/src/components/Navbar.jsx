"use client"
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#F3F1EA] text-black p-4 flex justify-between items-center">
      <Link href="/">
      <img src="/assets/logo_tulisify.png" alt="Tulisify Logo" className="h-10" />
      </Link>
    </nav>
  );
}
