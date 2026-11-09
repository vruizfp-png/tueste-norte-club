'use client';

import { useActionState } from 'react';
import { suscribirClub, FormState } from '../../actions/suscripcion';

const estadoInicial: FormState = { mensaje: '', exito: false };

export default function FormularioSuscripcion() {
  const [state, formAction, isPending] = useActionState(suscribirClub, estadoInicial);

  return (
    <div className="bg-amber-900 text-white rounded-2xl p-6 md:p-8 my-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-2">Únete al Club Tueste Norte ☕</h2>
      <p className="text-amber-200 text-sm mb-6">Recibe cada mes granos seleccionados en su punto óptimo de tueste.</p>

      <form action={formAction} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1 text-amber-200">Tu Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="ejemplo@tuestenorte.com"
            className="w-full px-4 py-2.5 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider mb-1 text-amber-200">Perfil Preferido</label>
          <select
            name="cafeFavorito"
            className="w-full px-4 py-2.5 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="Etiopía Yirgacheffe">Etiopía - Notas florales</option>
            <option value="Colombia Supremo">Colombia - Frutal y balanceado</option>
            <option value="Guatemala Antigua">Guatemala - Chocolate y especias</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-lg transition disabled:opacity-50"
        >
          {isPending ? 'Procesando...' : 'Confirmar Suscripción'}
        </button>
      </form>

      {state.mensaje && (
        <div className={`mt-4 p-4 rounded-lg text-sm font-medium ${state.exito ? 'bg-emerald-800/80 text-emerald-100' : 'bg-red-800/80 text-red-100'}`}>
          {state.mensaje}
        </div>
      )}
    </div>
  );
}