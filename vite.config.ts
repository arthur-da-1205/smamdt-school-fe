import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(env.PORT),
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },
    css: {
      modules: {
        generateScopedName: 'smamdt-[local]-[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
      postcss: {
        plugins: [autoprefixer(), tailwindcss()],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "src/styles/var.less";`,
        },
      },
    },
  };
});
