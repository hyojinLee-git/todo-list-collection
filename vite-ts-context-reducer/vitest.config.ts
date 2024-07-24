import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        environment: "jsdom",
    },
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
