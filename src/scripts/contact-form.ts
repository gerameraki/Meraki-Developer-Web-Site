export function initContactForm() {
  const form = document.getElementById("contactForm") as HTMLFormElement | null;

  if (!form) return;

  form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.disabled = true;
    submitButton.innerHTML = "Enviando...";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.innerHTML = `
          <div class="text-center py-8">
            <div class="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <h3 class="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
              <p>Gracias por contactarnos. Nos pondremos en contacto contigo en menos de 24 horas.</p>
            </div>
            <a href="/" class="btn-primary">Volver al Inicio</a>
          </div>
        `;
      } else {
        throw new Error("Error en el envío.");
      }
    } catch (error) {
      alert("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      console.error(error);
      submitButton.disabled = false;
      submitButton.innerHTML = "Enviar Mensaje";
    }
  });
}
