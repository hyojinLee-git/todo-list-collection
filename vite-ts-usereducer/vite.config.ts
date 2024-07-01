import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: "@assets", replacement: "/src/assets" },
            { find: "@components", replacement: "/src/components" },
            { find: "@constants", replacement: "/src/constants" },
            { find: "@containers", replacement: "/src/containers" },
            { find: "@hooks", replacement: "/src/hooks" },
            { find: "@models", replacement: "/src/models" },
            { find: "@reducers", replacement: "/src/reducers" },
            { find: "@", replacement: "/src" },
        ],
    },
});
