import { resolve as pathResolve } from 'path';
import { createLogger, defineConfig, loadEnv } from 'vite';

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
  //hide browser compatibility warning
  if (msg.includes('plugin:vite:resolve')) return;
  originalWarning(msg, options);
};

const resolve = (path) => pathResolve(__dirname, path)

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const buildExtra =
    mode === 'production' ? {minify: true} : {minify: false, sourcemap: true};

  return defineConfig({
    customLogger: logger,
    optimizeDeps: {
      esbuildOptions: {
        plugins: [],
      },
    },
    build: {
      ...buildExtra,
      emptyOutDir: true,
      outDir: "dist",
      lib: {
        entry: {
          api: resolve('./src/index.ts'),
        },
        formats: ["es"],
        fileName: (format, entryName) => `index.js`
      }
    },
  });
};
