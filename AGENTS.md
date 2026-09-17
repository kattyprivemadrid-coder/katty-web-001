# Katty Privé Madrid - Proyecto & Memoria de Restauración

## 1. Identidad y Propósito
Aplicación web boutique oficial de **Maison Katty Privé Madrid**, inspirada en la alta joyería, relojería y alta costura.
- **Canales de contacto oficiales**:
  - WhatsApp: +34 632 89 26 57
  - Correo electrónico: kattyprivemadrid@gmail.com
  - Instagram: @kattyprivemadrid (https://www.instagram.com/kattyprivemadrid)
  - TikTok: @kattyprivemadrid (https://www.tiktok.com/@kattyprivemadrid)
  - Facebook: Retirado por completo de la aplicación a petición de la dirección.

## 2. Estado del Código y Componentes Clave
- **src/App.tsx**: Estado central de la aplicación (catálogo, carrito, lista de deseos, citas privadas, estado admin `isAdmin`, modal de email `EmailContactModal`).
- **src/components/EmailContactModal.tsx**: Modal interactivo de contacto por correo electrónico. Ofrece copiado en 1 clic de `kattyprivemadrid@gmail.com` y accesos directos para redactar en Gmail Web, abrir en app nativa de correo (iOS Mail, Outlook) o abrir en Outlook Web.
- **src/components/Catalog.tsx**:
  - Escaparate con filtro por categorías (Perfumes, Gafas, Cosmética, Ropa, Bisutería y Bolsos).
  - "Vista Rápida" adaptada para móviles (iPhone y Android): visible por defecto con opacidad completa en pantallas táctiles y activable también tocando la foto del artículo.
  - Opciones de administración ("Editar" y "Cambiar Foto Escaparate"): estrictamente ocultas para los visitantes normales (`isAdmin && onUpdateProduct`).
- **src/components/Navbar.tsx**: Barra de navegación de lujo, con acceso directo al modal de email y enlace a redes oficiales (Instagram, TikTok).
- **src/components/Footer.tsx**: Pie de página de la Maison, con tarjeta de correo que abre el modal directo, enlaces a redes oficiales y acceso protegido para la dirección.
- **src/components/Hero.tsx**: Carrusel con fotos de cabecera y llamada a la acción hacia el catálogo y la consejería.
- **src/components/GiftingConcierge.tsx**: Asistente virtual de regalos refinado para recomendaciones de alta joyería y moda.
- **src/components/AppointmentForm.tsx**: Formulario de reserva de cita privada (a domicilio o por WhatsApp).
- **src/data/products.json** y **src/data/products.ts**: Catálogo oficial de piezas, descripciones y precios.

## 3. Punto de Restauración
- Se ha creado un repositorio Git local (`git commit`) que preserva de manera inmutable el código completo hasta la fecha.
- Todos los cambios se encuentran guardados en el disco del contenedor `/app/applet`.
- Borrar el historial de chat o iniciar una nueva conversación NO elimina ningún archivo del proyecto.
