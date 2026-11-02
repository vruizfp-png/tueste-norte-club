import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Cabecera de bienvenida */}
      <section className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700">
          Socio Activo ☕
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900">
          ¡Bienvenido de nuevo a Tueste Norte!
        </h1>
        <p className="mt-2 text-lg text-stone-600">
          Tu rincón de café de especialidad. Explora nuestros orígenes de temporada, gestiona tus envíos o descubre los métodos de preparación recomendados.
        </p>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/cafes"
            className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Ver catálogo de cafés &rarr;
          </Link>
        </div>
      </section>

      {/* Grid de accesos rápidos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Café del Mes</h2>
          <p className="mt-2 text-sm text-stone-600">
            Descubre la selección exclusiva de este mes directa desde origen con tueste artesanal.
          </p>
          <span className="mt-4 inline-block text-xs font-medium text-stone-400">Próximamente disponible</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Métodos de Extracción</h2>
          <p className="mt-2 text-sm text-stone-600">
            Aprende guías paso a paso para exprimir al máximo cada grano usando V60, Chemex o Espresso.
          </p>
          <span className="mt-4 inline-block text-xs font-medium text-stone-400">Próximamente disponible</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Blog & Orígenes</h2>
          <p className="mt-2 text-sm text-stone-600">
            Historias de caficultores, notas de sostenibilidad y cultura de café de especialidad.
          </p>
          <span className="mt-4 inline-block text-xs font-medium text-stone-400">Próximamente disponible</span>
        </div>
      </section>
    </div>
  );
}