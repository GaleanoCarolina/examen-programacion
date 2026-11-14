# App de Gestión de Fotografías
**Estudiante:** Génesis Carolina Sánchez Galeano

## Descripción
Aplicación móvil con React Native y Expo que permite la autenticación de usuarios mediante Supabase. El usuario autenticado puede seleccionar fotografías desde la galería o capturarlas con la cámara del dispositivo, manteniendo la sesión iniciada al cerrar la app.

## Instrucciones de instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npx expo start` para iniciar el servidor.
4. Escanear el código QR con Expo Go en un celular físico.

## Dependencias principales
- React Native / Expo
- @supabase/supabase-js (Autenticación y base de datos)
- @react-native-async-storage/async-storage (Persistencia de sesión)
- expo-image-picker (Uso de cámara y galería)