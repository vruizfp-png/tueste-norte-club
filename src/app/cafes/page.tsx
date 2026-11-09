import { cafes } from '@/data/cafes';
import BuscadorCafes from './BuscadorCafes';
import FormularioSuscripcion from '../components/FormularioSuscripcion';

export default function PaginaCafes() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Catálogo Tueste Norte</h1>
      <p className="text-gray-600 mb-8">Explora nuestra variedad de granos de especialidad de origen ético.</p>

      <BuscadorCafes cafes={cafes} />
      <FormularioSuscripcion />
    </main>
  );
}