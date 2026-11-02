type EtiquetaTuesteProps = {
  tueste: 'claro' | 'medio' | 'oscuro';
};

export default function EtiquetaTueste({ tueste }: EtiquetaTuesteProps) {
  const estilos = {
    claro: 'bg-amber-100 text-amber-900 border-amber-200',
    medio: 'bg-amber-600 text-white border-amber-700',
    oscuro: 'bg-stone-800 text-stone-100 border-stone-900',
  };

  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${estilos[tueste]}`}
    >
      Tueste {tueste}
    </span>
  );
}