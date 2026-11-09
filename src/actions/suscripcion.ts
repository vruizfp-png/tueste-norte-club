'use server';

export interface FormState {
  mensaje: string;
  exito: boolean;
}

export async function suscribirClub(
  prevState: FormState | unknown,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email') as string;
  const cafeFavorito = formData.get('cafeFavorito') as string;

  if (!email || !email.includes('@')) {
    return {
      mensaje: 'Por favor, introduce un correo electrónico válido.',
      exito: false,
    };
  }

  // Simulación de procesamiento / guardado en base de datos
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    mensaje: `¡Suscripción completada! Te enviaremos tu selección de ${cafeFavorito || 'café de especialidad'} a ${email}.`,
    exito: true,
  };
}