import { defineConfig } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@@root': path.resolve(__dirname, './src'),
            '@@assets': path.resolve(__dirname, './src/assets'),
            '@@components': path.resolve(__dirname, './src/components'),
            '@@containers': path.resolve(__dirname, './src/containers'),
            '@@navigation': path.resolve(__dirname, './src/navigation'),
            '@@pages': path.resolve(__dirname, './src/pages'),
            '@@store': path.resolve(__dirname, './src/store'),
            '@@types': path.resolve(__dirname, './src/types'),

            /* Index specific aliases */
            '@@constants': path.resolve(__dirname, './src/constants'),
            '@@hooks': path.resolve(__dirname, './src/hooks'),
            '@@themes': path.resolve(__dirname, './src/themes'),
            '@@services': path.resolve(__dirname, './src/services'),
            '@@utils': path.resolve(__dirname, './src/utils'),
        }
    },
    plugins: [
        react(), 
        TanStackRouterVite(),
        {
            name: "markdown-loader",
            transform(code, id) {
                if (id.slice(-3) === ".md") {
                    // For .md files, get the raw content
                    return `export default ${JSON.stringify(code)};`;
                }
            }
        },
        VitePWA({ 
            registerType: "autoUpdate",
            injectRegister: "auto",
            manifest: {
                "name": "Rummy Card Game Score Tracker",
                "short_name": "Rummy Scorer",
                "description": "Effortlessly track and manage points for your Rummy card games",
                "icons": [
                    {
                        "src": "favicon.ico",
                        "sizes": "64x64 32x32 24x24 16x16",
                        "type": "image/x-icon"
                    },
                    {
                        "src": "logo192.png",
                        "type": "image/png",
                        "sizes": "192x192"
                    },
                    {
                        "src": "logo192.png",
                        "type": "image/png",
                        "sizes": "192x192",
                        "purpose": "maskable"
                    },
                    {
                        "src": "logo512.png",
                        "type": "image/png",
                        "sizes": "512x512"
                    },
                    {
                        "src": "logo512.png",
                        "type": "image/png",
                        "sizes": "512x512",
                        "purpose": "maskable"
                    },
                    {
                        "src": "apple-touch-icon.png",
                        "type": "image/png",
                        "sizes": "180x180",
                        "purpose": "apple touch icon"
                    }
                ],
                "start_url": "/",
                "scope": "/",
                "display": "standalone",
                "theme_color": "#d86bfe",
                "background_color": "#100016",
                "orientation": "portrait"
            }
        })
    ],
});