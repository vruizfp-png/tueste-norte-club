import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cafes } from '@/data/cafes';
import EtiquetaTueste from '@/components/EtiquetaTueste';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetalleCafe({ params }: PageProps) {
  const { slug } = await params;
  const cafe = cafes.find((c) => c.slug === slug);

  if (!cafe) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
      <Link
        href="/cafes"
        className="text-sm font-medium text-stone-500 hover:text-stone-800"
      >
        &larr; Volver al catálogo
      </Link>

      <header className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{cafe.nombre}</h1>
          <p className="text-stone-500">{cafe.origen}</p>
        </div>
        <EtiquetaTueste tueste={cafe.tueste} />
      </header>

      <hr className="my-6 border-stone-200" />

      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-stone-700">Notas de cata</h2>
          <p className="mt-1 text-lg italic text-stone-800">{cafe.notas}</p>
        </div>

        <div>
          <h2 className="font-semibold text-stone-700">Precio por bolsa</h2>
          <p className="mt-1 text-2xl font-bold text-stone-900">
            {cafe.precio.toFixed(2)} €
          </p>
        </div>
      </div>
    </article>
  );
}