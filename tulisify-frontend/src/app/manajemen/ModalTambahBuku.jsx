"use client";

import React from "react";

export default function ModalTambahBuku({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman data buku di sini
    onClose(); // Tutup modal setelah submit
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-50 flex justify-center items-center">
      <div className="bg-[#F2F1EE] rounded-xl w-full max-w-lg shadow-lg">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-bold">Tambah Buku</h2>
          <button onClick={onClose} className="text-xl text-gray-600">×</button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Judul</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Upload Cover</label>
            <input type="file" accept="image/*" className="w-full" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Pengarang</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Tahun Terbit</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              min="1900"
              max="2100"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Golongan</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" name="category" value="SU" />
                <span className="ml-1">SU</span>
              </label>
              <label>
                <input type="radio" name="category" value="13+" />
                <span className="ml-1">13+</span>
              </label>
              <label>
                <input type="radio" name="category" value="18+" />
                <span className="ml-1">18+</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-white bg-[#324755] rounded px-2 py-1">
              Upload File PDF (biarkan kosong jika tidak diubah)
            </label>
            <input
              type="file"
              accept=".pdf"
              className="w-full border border-[#324755] rounded"
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#324755] text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
