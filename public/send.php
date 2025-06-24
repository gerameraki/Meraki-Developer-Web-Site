<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  if (!empty($_POST["confirmacion"])) {
  // Honeypot
  http_response_code(403);
  echo "Acceso denegado.";
  exit;
}


  $nombre = $_POST["nombre"] ?? '';
  $empresa = $_POST["empresa"] ?? '';
  $email = $_POST["email"] ?? '';
  $telefono = $_POST["telefono"] ?? '';
  $servicio = $_POST["servicio"] ?? '';
  $mensaje = $_POST["mensaje"] ?? '';

  $to = "gerardo@merakideveloper.com";
  $subject = "Nuevo mensaje desde el formulario de contacto";
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  $body = "Has recibido un nuevo mensaje desde tu página web:\n\n";
  $body .= "Nombre: $nombre\n";
  $body .= "Empresa: $empresa\n";
  $body .= "Email: $email\n";
  $body .= "Teléfono: $telefono\n";
  $body .= "Servicio de Interés: $servicio\n\n";
  $body .= "Mensaje:\n$mensaje\n";

  $success = mail($to, $subject, $body, $headers);

  if ($success) {
    echo "OK";
  } else {
    http_response_code(500);
    echo "Error al enviar el correo.";
  }
} else {
  http_response_code(403);
  echo "Método no permitido.";
}
