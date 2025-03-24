"use client";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">My Store</a>
        <div>
          <a href="/products" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">Shop Now</a>
        </div>
      </div>
    </nav>
  );
}
