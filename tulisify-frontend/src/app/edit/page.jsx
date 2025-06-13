"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EditBookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookId = searchParams.get("id");

  const [book, setBook] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    category: "",
    cover: null,
    file: null,
    old_cover: "",
    old_file: "",
  });

  useEffect(() => {
    if (bookId) {
      fetch(`/api/books/${bookId}`)
        .then((res) => res.json())
        .then((data) => {
          setBook(data);
          setFormData({
            ...data,
            old_cover: data.cover,
            old_file: data.file,
          });
        })
        .catch((err) => console.error("Gagal memuat data buku:", err));
    }
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", bookId);
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("year", formData.year);
    data.append("category", formData.category);
    data.append("old_cover", formData.old_cover);
    data.append("old_file", formData.old_file);
    if (formData.cover) data.append("cover", formData.cover);
    if (formData.file) data.append("file", formData.file);

    const res = await fetch(`/api/books/${bookId}`, {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      router.push("/manajemen");
    } else {
      alert("Gagal memperbarui buku.");
    }
  };

//   if (!book) {
//     return <div className="p-8">Memuat data buku...</div>;
//   }

  return (
    <div className="bg-[#F2F1EE] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#3D5A80] mb-6">Edit Buku</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-xl mx-auto"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Upload Cover (biarkan kosong jika tidak diubah)
          </label>
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Pengarang</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Tahun Terbit</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Golongan</label>
          <div className="flex gap-4">
            {["SU", "13+", "18+"].map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={formData.category === cat}
                  onChange={handleChange}
                  required
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
        <label className="block mb-1 font-medium">
            Upload File PDF (biarkan kosong jika tidak diubah)
          </label>
  <input
    type="file"
    name="file"
    accept=".pdf"
    onChange={handleChange}
    className="w-full outline outline-2 outline-[#324755] rounded px-2 py-1"
  />
</div>


        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => router.push("/manajemen")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-[#3D5A80] text-white px-6 py-2 rounded"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}
