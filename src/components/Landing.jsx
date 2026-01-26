export default function Landing() {
  const books = [
    { title: "React Handbook", price: "799", tag: "Frontend" },
    { title: "Advanced JS", price: "899", tag: "Core" },
    { title: "System Design", price: "1,299", tag: "Architecture" }
  ];

  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="text-blue-600 font-semibold tracking-widest text-xs uppercase">Curated Excellence</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          Books for people<br /><span className="text-slate-400">who build things.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
          Skip the noise. We source high-quality physical prints for the modern engineer.
        </p>
        <button className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transform hover:-translate-y-1 transition-all shadow-lg shadow-slate-200">
          Explore the Library
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
        {books.map((book, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 overflow-hidden flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
               {/* Visual placeholder representing a book cover */}
              <div className="w-1/2 h-1/2 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
                 <span className="text-slate-300">Cover Art</span>
              </div>
            </div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{book.tag}</p>
            <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{book.title}</h3>
            <p className="text-slate-500 mt-1 font-medium">₹{book.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}