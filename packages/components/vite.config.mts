import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: "./index.ts",
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "../../build/es")
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "../../build/lib")
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      formats: ["es", "cjs"],
      name: "c-ui"
    }
  },
  plugins: [
    vue(),
    visualizer(),
    dts({
      entryRoot: "components",
      outDir: [
        resolve(__dirname, "../../build/es/components"),
        resolve(__dirname, "../../build/lib/components")
      ],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "components")
    }
  },
  test: {
    environment: "happy-dom"
  }
});
