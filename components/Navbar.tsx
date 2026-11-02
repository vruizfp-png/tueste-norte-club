import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-stone-900 hover:text-stone-700 transition"
        >
          <span>☕</span>
          <span className="text-lg">Club Tueste Norte</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
          <Link href="/cafes" className="hover:text-stone-900 transition">
            Cafés del mes
          </Link>
          <Link href="/metodos" className="hover:text-stone-900 transition">
            Métodos
          </Link>
          <Link href="/blog" className="hover:text-stone-900 transition">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}