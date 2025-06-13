"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ModalTambahBuku from "./ModalTambahBuku";

export default function BookManagementPage() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => {
        console.error("Gagal fetch dari /api/books, pakai dummy:", err);
        setBooks([
          {
            id: 1,
            title: "Pulang",
            author: "Tere Liye",
            year: 2015,
            category: "Fiksi",
            cover: "cover_pulang.jpg",
            file: "pulang.pdf",
          },
          {
            id: 2,
            title: "Pergi",
            author: "Tere Liye",
            year: 2018,
            category: "Fiksi",
            cover: "cover_pergi.jpg",
            file: "pulang.pdf",
          },
          {
            id: 3,
            title: "Hello",
            author: "Tere Liye",
            year: 2021,
            category: "Fiksi",
            cover: "cover_hello.jpg",
            file: "pulang.pdf",
          },
        ]);
      });
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus buku ini?")) {
      const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBooks(books.filter((book) => book.id !== id));
      }
    }
  };

  return (
    <div className="bg-[#F2F1EE] min-h-screen">
      <nav className="bg-white p-4 shadow flex justify-between items-center">
        <img src="/assets/logo_tulisify.png" alt="Logo" className="h-10" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-full"
          />
        </div>
        <div className="bg-[#F2F1EE] p-2 rounded-full">
          <img src="/assets/icon_admin.png" alt="User" className="h-6 w-6" />
        </div>
      </nav>

      <main className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#3D5A80]">Daftar Buku</h1>
          <button
            className="bg-[#52769B] text-white px-5 py-2 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Tambah Buku
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-separate border-spacing-y-2">
            <thead className="bg-[#D5D0C7]">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Judul Buku</th>
                <th className="px-4 py-2">Cover</th>
                <th className="px-4 py-2">Pengarang</th>
                <th className="px-4 py-2">Tahun Terbit</th>
                <th className="px-4 py-2">Golongan</th>
                <th className="px-4 py-2">File PDF</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book, index) => (
                  <tr
                    key={book.id}
                    className="bg-white rounded-lg shadow-sm text-sm"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{book.title}</td>
                    <td className="px-4 py-2">
                      <img
                        src={`/assets/${book.cover}`}
                        alt="Cover"
                        className="h-12 w-auto"
                      />
                    </td>
                    <td className="px-4 py-2">{book.author}</td>
                    <td className="px-4 py-2">{book.year}</td>
                    <td className="px-4 py-2">{book.category}</td>
                    <td className="px-4 py-2">
                      <a
                        href={`/uploads/${book.file}`}
                        className="bg-[#36454F] text-white px-3 py-1 rounded"
                        target="_blank"
                      >
                        Lihat
                      </a>
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        className="bg-yellow-400 text-white px-3 py-1 rounded"
                        onClick={() => router.push(`/edit?id=${book.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(book.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Belum ada data buku.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {showModal && (
        <ModalTambahBuku onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
