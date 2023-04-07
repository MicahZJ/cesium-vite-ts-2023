import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { version as pkgVersion } from './package.json'

import cesium from 'vite-plugin-cesium';

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/store': ['useStore'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    // port: 8080, // 端口号
    open: true, // 自动打开浏览器
    cors: true, // 跨域设置允许
    hmr: true, // 热加载
    strictPort: false, // 设为true端口已占用直接退出, false 尝试下一个可用端口
    // 接口代理
    proxy: {
      "/api": {
        // 本地 8000 前端代码的接口 代理到 8888 的服务端口
        target: "http://localhost:8888/",
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace("/api/", "/"),
      },
    },
  },
})
