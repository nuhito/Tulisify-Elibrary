"use client";

import Image from "next/image";
import Link from "next/link";

export default function ListBooksPage() {
  const books = [
    {
      id: 1,
      title: "Pulang",
      author: "Tere Liye",
      year: 2015,
      category: "Fiksi",
      cover: "/assets/cover_pergi.jpg", // Ganti dengan path gambar kamu
      file: "/uploads/pulang.pdf", // File download simulasi
    },
    {
      id: 2,
      title: "Pergi",
      author: "Tere Liye",
      year: 2018,
      category: "Fiksi",
      cover: "/assets/cover_pulang.jpg",
      file: "/uploads/pulang.pdf",
    },
    {
      id: 3,
      title: "Hello",
      author: "Tere Liye",
      year: 2021,
      category: "Fiksi",
      cover: "/assets/cover_hello.jpg",
      file: "/uploads/pulang.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F1EA]">
      {/* Navbar */}
      <nav className="bg-[#324755] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/assets/logo_tulisify.png" alt="Tulisify Logo" className="h-10" />
          </Link>
        </div>
      </nav>

      {/* Heading */}
      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl font-semibold text-[#B37056]">Daftar Buku</h2>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-10">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Pengarang:</strong> {book.author}
                <br />
                <strong>Tahun:</strong> {book.year}
                <br />
                <strong>Kategori:</strong> {book.category}
              </p>
              <a
                href={book.file}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-[#546E7A] text-white rounded hover:bg-[#455A64]"
              >
                Download Buku
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
