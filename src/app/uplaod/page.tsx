"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!files) return;

    setLoading(true);
    setError("");

    try {
      // Step 1 — Check password
      const checkRes = await axios.post("/api/upload", { password });
      if (checkRes.data.error) {
        setError(checkRes.data.error);
        setLoading(false);
        return;
      }

      const uploadedUrls: string[] = [];

      // Step 2 — Upload each file directly to Cloudinary
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "helloo"); // Your unsigned preset name
        formData.append("folder", "ui");

        const cloudRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );

        uploadedUrls.push(cloudRes.data.secure_url);
      }

      setUrls(uploadedUrls);
      setFiles(null)
    } catch (err: any) {
      console.error(err);
      setError("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Secure Image Upload</h1>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 rounded border border-gray-700 text-white"
      />

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
        className="mb-4 text-white"
      />

      <button
        onClick={handleUpload}
        disabled={loading || !files}
        className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded font-semibold"
      >
        {loading ? "Uploading..." : "Upload Images"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {urls.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
          {urls.map((url) => (
            <div key={url} className="rounded-lg overflow-hidden border border-gray-800">
              <img src={url} alt="Uploaded" className="w-full h-auto" />
              <p className="text-xs text-gray-400 break-all p-2">{url}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
