<?php
$to = "gerardo@merakideveloper.com"; 
$subject = "Prueba de envío de correo desde Hostinger";
$message = "Hola Gerardo,\n\nEste es un correo de prueba enviado desde tu hosting en Hostinger usando la función mail().\n\nSi recibes este mensaje, el envío básico de correos está funcionando.";
$headers = "From: pruebas@merakideveloper.com\r\n";
$headers .= "Reply-To: pruebas@merakideveloper.com\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo "<h2 style='color: green;'>✅ ¡Correo enviado correctamente!</h2>";
} else {
  echo "<h2 style='color: red;'>❌ Error: No se pudo enviar el correo.</h2>";
}
?>
