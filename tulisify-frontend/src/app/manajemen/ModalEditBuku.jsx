"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ModalEditBuku({ bookId, onClose }) {
  const router = useRouter();
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
          setFormData({
            ...data,
            old_cover: data.cover,
            old_file: data.file,
          });
        });
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
      onClose(); // tutup popup
      router.refresh(); // refresh halaman manajemen
    } else {
      alert("Gagal memperbarui buku.");
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-50 flex justify-center items-center">
      <div className="bg-[#F2F1EE] p-6 rounded-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Buku</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label className="block mb-2 font-medium">Judul</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border px-4 py-2 rounded mb-4" required />
          <label className="block mb-2 font-medium">Upload Cover</label>
          <input type="file" name="cover" accept="image/*" onChange={handleChange} className="w-full border px-2 py-1 rounded mb-4" />
          <label className="block mb-2 font-medium">Pengarang</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full border px-4 py-2 rounded mb-4" required />
          <label className="block mb-2 font-medium">Tahun Terbit</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full border px-4 py-2 rounded mb-4" required />
          <label className="block mb-2 font-medium">Golongan</label>
          <div className="flex gap-4 mb-4">
            {["SU", "13+", "18+"].map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input type="radio" name="category" value={cat} checked={formData.category === cat} onChange={handleChange} required />
                {cat}
              </label>
            ))}
          </div>
          <label className="block mb-2 font-medium">Upload File PDF</label>
          <input type="file" name="file" accept=".pdf" onChange={handleChange} className="w-full border px-2 py-1 rounded mb-6" />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Batal</button>
            <button type="submit" className="bg-[#3D5A80] text-white px-6 py-2 rounded">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
