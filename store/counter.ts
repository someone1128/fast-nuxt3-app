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

    //persist定义要做判断，因为localStorage是客户端参数，所以需要加process.client
    persist: process.client && {
        storage: localStorage,
        paths: ['times']
    }

})
