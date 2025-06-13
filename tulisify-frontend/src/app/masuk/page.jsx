'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function MasukPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#F3F1EA] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/assets/logo_tulisify.png" alt="Tulisify Logo" className="h-10" />
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2 bg-[#B37056] overflow-hidden">
          <Image
            src="/assets/ilustrasi_tulisify.png"
            alt="Side Illustration"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <form className="w-full max-w-md flex flex-col items-center gap-4">
            <Image src="/assets/user_icon.png" alt="User Logo" width={120} height={120} />
            <h2 className="text-2xl font-semibold text-[#B37056]">Masuk</h2>

            {/* Buttons */}
            <Link href="/login" className="w-full">
                <button type="button"className="w-full py-2 mt-3 border border-[#B37056] text-[#B37056] rounded bg-transparent hover:bg-[#B37056] hover:text-white transition">
                Login
                </button>
            </Link>

            <Link href="/daftar_akun" className="w-full">
                <button type="button"className="w-full py-2 mt-3 border border-[#B37056] text-[#B37056] rounded bg-transparent hover:bg-[#B37056] hover:text-white transition">
                Daftar Akun
                </button>
            </Link>

            <p className="text-sm text-gray-500">Lakukan daftar akun jika belum mempunyai akun</p>
          </form>
        </div>
      </div>
    </div>
  );
}
