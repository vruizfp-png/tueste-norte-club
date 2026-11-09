'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cafe } from '@/data/cafes';

interface Props {
  cafes: Cafe[];
}

export default function BuscadorCafes({ cafes }: Props) {
  const [busqueda, setBusqueda] = useState('');
  const [tuesteFiltro, setTuesteFiltro] = useState<string>('todos');

  const cafesFiltrados = cafes.filter((cafe) => {
    const coincideNombre = cafe.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          cafe.origen.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTueste = tuesteFiltro === 'todos' || cafe.tueste === tuesteFiltro;
    return coincideNombre && coincideTueste;
  });

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 bg-amber-50 p-4 rounded-xl border border-amber-200">
        <input
          type="text"
          placeholder="Buscar por nombre u origen..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        <select
          value={tuesteFiltro}
          onChange={(e) => setTuesteFiltro(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="todos">Todos los tuestes</option>
          <option value="Natural">Natural</option>
          <option value="Medio">Medio</option>
          <option value="Oscuro">Oscuro</option>
        </select>
      </div>

      {/* Grid de resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafesFiltrados.map((cafe) => (
          <div key={cafe.slug} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition bg-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{cafe.nombre}</h3>
                <span className="text-sm px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                  {cafe.tueste}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">📍 {cafe.origen}</p>
              <p className="text-gray-600 text-sm line-clamp-2">{cafe.descripcion}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">{cafe.precio} €</span>
              <Link
                href={`/cafes/${cafe.slug}`}
                className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-sm font-medium transition"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {cafesFiltrados.length === 0 && (
        <p className="text-center text-gray-500 py-8">No se encontraron cafés que coincidan con la búsqueda.</p>
      )}
    </div>
  );
}