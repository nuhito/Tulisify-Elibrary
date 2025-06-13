'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2 bg-red-600 overflow-hidden">
          <Image src="/assets/ilustrasi_tulisify.png" alt="Tulisify Side" width={800} height={800} className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <form className="w-full max-w-md flex flex-col items-center gap-4">
            <Image src="/assets/tos.png" alt="tos" width={120} height={120} />
            <h2 className="text-2xl font-semibold text-[#B37056]">Selamat Datang di Tulisify!</h2>

            <Link href="/masuk" className="w-full">
            <button type="button" className="btn w-full py-2 mt-3 bg-[#B37056] hover:bg-[#a65f48] text-white rounded">
              Download Buku
            </button>

            </Link>

            <Link href="/masuk_admin" className="w-full">
            <button type="button"className="w-full py-2 mt-3 border border-[#B37056] text-[#B37056] rounded bg-transparent hover:bg-[#B37056] hover:text-white transition">
              Masuk Sebagai Admin
            </button>

            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
