import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});

//copiamos todo para que el path sea relativo a la carpeta src y asi cuando movemos algun componente la @ siempre hara que funcione y no tenemos que modificar la ruta
