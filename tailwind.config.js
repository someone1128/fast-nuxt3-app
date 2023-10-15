/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://blog.csdn.net/u010454030/article/details/129925650
  // 禁用预加载，修复tailwind样式 与 naive-ui button等样式等冲突问题
  corePlugins: {
    preflight: false
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
