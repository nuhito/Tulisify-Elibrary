"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulasi verifikasi login (ganti dengan fetch ke API kalau backend sudah ada)
    if (formData.username === "user123" && formData.password === "123456789") {
      router.push("/list_books"); // redirect setelah login sukses
    } else {
      setMessage("Akun belum terdaftar atau username/password salah.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#F3F1EA] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/assets/logo_tulisify.png" alt="Tulisify Logo" className="h-10" />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2 bg-red-500">
          <img src="/assets/ilustrasi_tulisify.png" alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
          <form
            className="w-full max-w-md flex flex-col items-center gap-4"
            onSubmit={handleSubmit}
          >
            <Image src="/assets/login_icon.png" alt="checkmark" width={120} height={120} />

            <h2 className="text-2xl font-semibold text-[#B37056]">Login</h2>

            {message && (
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded w-full text-center">
                {message}
              </div>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full border px-4 py-2 rounded"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full border px-4 py-2 rounded"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500 w-full text-left">
              Minimal 8 karakter, A-Z, a-z, angka
            </p>

            <button
              type="submit"
              className="w-full py-2 mt-3 border border-[#B37056] text-[#B37056] rounded bg-transparent hover:bg-[#B37056] hover:text-white transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
