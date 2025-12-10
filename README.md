## Paso 1: Crear proyecto de React con Vite

npm creat vite@lates product-frontend -- --template react

## Paso 2: moverse a la carpeta del proyecto 

cd product-frontend

## Paso 2.1: Iniciar la app en modo desarrollo

npm run dev

## Paso 3: Instalar Tailwind CSS y dependencias

npm install -D tailwindcss@latest @tailwindcss/postcss@latest postcss autoprefixer

## Paso 4: Crear el archivo ./postcss.config.js

import autoprefixer from "autoprefixer";

export default {
  plugins: {
    'tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

