import {defineStore} from 'pinia'

interface CounterState {
    times: number
    name: string
}

export const userCouter = defineStore('counter', {
    state: (): CounterState => ({
        times: 5,
        name: "追光的栗子"
    }),

    actions: {
        increment() {
            this.times++
            this.name = "栗子"
        }
    },

    //  // 使用 persist 选项将 times 属性保存到本地存储中
    persist: process.client && {
        storage: localStorage, // 只在客户端环境下生效
        paths: ['times'] // 只保存 times 属性
    }

})
