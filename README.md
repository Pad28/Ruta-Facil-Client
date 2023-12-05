# App movil

## Pasos de instalación
1. Clona o descarga este repositorio.

2. Se requiere de Node.JS para la ejecucion de desarrollo.

3. Desde la carpeta raíz del proyecto, ejecuta el comando siguiente para instalar las dependencias: `npm i`

4. Para ejecutar expo se utiliza `npx expo start`.

## Variables de entorno
- `EXPO_PUBLIC_API_URL`: URL del host desde el cual se esta sirviendo el API

## AsyncStorage
- `userAuthenticated`: Esta clave permite acceder al usuario autenticado y su valor puede ser convertido al tipo `UserAuthenticatedInterface`.
  
- `userImage`: Esta clave permite acceder al nombre de la foto de perfil del usuario descargada en los directorios internos del dispositivo móvil.
