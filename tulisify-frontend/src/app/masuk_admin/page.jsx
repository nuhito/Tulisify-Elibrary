"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MasukAdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin123" && password === "123456789") {
      router.push("/admin");
    } else {
      setMessage("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#F3F1EA] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img
              src="/assets/logo_tulisify.png"
              alt="Tulisify Logo"
              className="h-10"
            />
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left image */}
        <figure className="hidden md:block w-1/2 bg-[#B37056] h-full overflow-hidden">
          <img
            src="/assets/ilustrasi_tulisify.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <figure className="flex justify-center mb-4">
              <img src="/assets/icon_admin.png" alt="admin-logo" width={120} />
            </figure>
            <h2 className="text-2xl font-semibold text-[#324755] mb-4">
              Masuk Sebagai Admin
            </h2>

            {message && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
                {message}
              </div>
            )}

            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-3 border border-[#B37056] text-[#B37056] rounded bg-transparent hover:bg-[#B37056] hover:text-white transition"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
