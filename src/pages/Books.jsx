import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12">
          All Books
        </h1>

        {loading ? (
          <p className="text-center text-slate-500">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="text-center text-slate-500">No books available</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
              >
                {/* Cover */}
                <div className="aspect-[3/4] mb-5 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-300">Cover</span>
                </div>

                {/* Category */}
                <p className="text-xs font-bold text-indigo-600 uppercase">
                  {book.category || "General"}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-1">
                  {book.title}
                </h3>

                {/* Price */}
                <p className="text-slate-500 mt-1">
                  ₹{book.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
