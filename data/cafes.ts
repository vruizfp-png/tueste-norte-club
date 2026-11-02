export type Cafe = {
  id: number;
  slug: string;
  nombre: string;
  origen: string;
  notas: string;
  tueste: 'claro' | 'medio' | 'oscuro';
  precio: number;
};

export const cafes: Cafe[] = [
  {
    id: 1,
    slug: 'etiopia-sidamo',
    nombre: 'Etiopía Sidamo',
    origen: 'Etiopía',
    notas: 'Floral, cítrico, té negro',
    tueste: 'claro',
    precio: 12.5,
  },
  {
    id: 2,
    slug: 'colombia-huila',
    nombre: 'Colombia Huila',
    origen: 'Colombia',
    notas: 'Caramelo, nuez, manzana roja',
    tueste: 'medio',
    precio: 11.9,
  },
  {
    id: 3,
    slug: 'brasil-cerrado',
    nombre: 'Brasil Cerrado',
    origen: 'Brasil',
    notas: 'Chocolate, avellana, cuerpo alto',
    tueste: 'oscuro',
    precio: 10.5,
  },
  {
    id: 4,
    slug: 'guatemala-antigua',
    nombre: 'Guatemala Antigua',
    origen: 'Guatemala',
    notas: 'Cacao, especias dulces, naranja',
    tueste: 'medio',
    precio: 12.0,
  },
];