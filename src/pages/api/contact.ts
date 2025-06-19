
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { nombre, empresa, email, telefono, servicio, mensaje } = body;

    await resend.emails.send({
      from: "Contacto Meraki <gerardo@merakideveloper.com>", 
      to: "gerardomtzc125@gmail.com",
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || "No especificado"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
        <p><strong>Servicio de interés:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

