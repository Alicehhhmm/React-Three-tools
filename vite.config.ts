import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';

import { wrapperEnv } from './src/utils/env';
// TODO(优化): 当插件或打包配置比较复杂时，可单独轴离到 ./config 文件进行配置（便于维护）
export default defineConfig((mode: ConfigEnv): UserConfig => {
    const viteEnv = wrapperEnv(loadEnv(mode.mode, process.cwd()));

    return {
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx'],
            alias: {
                '@': resolve(__dirname, './src'),
                '@demo': resolve(__dirname, './pages/demo'),
            },
        },
        // server config
        server: {
            host: '0.0.0.0',
            port: viteEnv.VITE_PORT,
            open: viteEnv.VITE_OPEN,
            cors: true,
            // https: false,
            proxy: {
                '/dev-api': {
                    target: 'https://mock.presstime.cn/mock/65547a7c2a3e29f8a106bc18/mlt-dbm', // easymock
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/dev-api/, ''),
                },
            },
        },
        plugins: [react()],
        build: {
            outDir: 'dist',
            assetsDir: 'static/assets',
            // 静态资源打包到dist下的不同目录
            rollupOptions: {
                output: {
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                },
            },
        },
    };
});
