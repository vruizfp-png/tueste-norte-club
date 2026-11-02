import Link from 'next/link';
import { cafes } from '@/data/cafes';
import EtiquetaTueste from '@/components/EtiquetaTueste';

export default function CatalogoCafes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Cafés del Mes</h1>
        <p className="mt-1 text-stone-600">Nuestra selección de especialidad recién tostada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cafes.map((cafe) => (
          <Link
            key={cafe.slug}
            href={`/cafes/${cafe.slug}`}
            className="group block rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-400 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-stone-900 group-hover:text-stone-700">
                {cafe.nombre}
              </h2>
              <EtiquetaTueste tueste={cafe.tueste} />
            </div>
            <p className="mt-1 text-sm text-stone-500">{cafe.origen}</p>
            <p className="mt-4 text-sm italic text-stone-700">Notas: {cafe.notas}</p>
            <p className="mt-4 text-lg font-bold text-stone-900">{cafe.precio.toFixed(2)} €</p>
          </Link>
        ))}
      </div>
    </div>
  );
}