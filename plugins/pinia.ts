import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$pinia.use(piniaPluginPersistedstate)
})
