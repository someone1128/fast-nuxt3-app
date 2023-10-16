// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'dayjs-nuxt'
    ],

    dayjs: {
        locales: ['en', 'ja'],
        defaultLocale: 'en'
    },


    // 调试工具
    devtools: {enabled: true},

    // 配置 tailwind
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    css: [
        '@/assets/css/tailwind.css',
        '@/assets/less/main.less',
    ],

    build: {
        // less
        loaders: {
            less: {
                javascriptEnabled: true
            }
        },
        // naive-ui
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        // 避免外部化，将某些依赖项或模块从应用程序或库的构建输出中移除，然后将其视为外部资源，以在运行时动态加载。这通常用于优化构建输出文件的大小，提高加载性能，以及减少重复下载和执行相同的代码。
        ssr: {
            noExternal: ['naive-ui'],
        },
        // 解决在开发模式下降低 naive-ui 引起的打包缓慢
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
                    : []
        }
    },


})
