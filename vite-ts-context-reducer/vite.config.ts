import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@assets", replacement: "/src/assets" },
            { find: "@components", replacement: "/src/components" },
            { find: "@constants", replacement: "/src/constants" },
            { find: "@containers", replacement: "/src/containers" },
            { find: "@contexts", replacement: "/src/contexts" },
            { find: "@hooks", replacement: "/src/hooks" },
            { find: "@models", replacement: "/src/models" },
            { find: "@reducers", replacement: "/src/reducers" },
            { find: "@", replacement: "/src" },
        ],
    },
});
