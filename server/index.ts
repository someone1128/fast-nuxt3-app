// 引入了nuxt/app模块中的UseFetchOptions类型,UseFetchOptions类型是一个用于配置请求选项的接口或类型
import {useFetch, UseFetchOptions} from "nuxt/app";

//  HTTP 请求的方法
type Methods = "GET" | "POST" | "DELETE" | "PUT";

// URL 基地址
const BASE_URL = "";

// 请求结果数据格式
export interface IResultData<T> {
    code: number;
    data: T;
    msg: string;
}

/**
 * api请求封装，使用useFetch函数
 * @param { String } url 请求地址
 * @param { String } method 请求方法
 * @param { Object } data 请求数据
 * @param { UseFetchOptions } options 请求选项
 */

/**
 * options常用参数说明
 * @param { boolean } lazy    是否在加载路由后才请求该异步方法，默认为false
 * @param { boolean } server  是否在服务端请求数据，默认为true
 */
class HttpRequest {
    request<T = any>(url: string, method: Methods, data: any, options?: UseFetchOptions<T>) {
        return new Promise((resolve, reject) => {
            // 继承UseFetchOptions类型，包含了baseURL和method两个属性
            const newOptions: UseFetchOptions<T> = {
                baseURL: BASE_URL,
                method,
                ...options,
            };

            // 根据请求方法处理请求的数据
            if (method === "GET" || method === "DELETE") {
                // 将数据设置为newOptions的params属性
                newOptions.params = data;
            }
            if (method === "POST" || method === "PUT") {
                // 将数据设置为newOptions的body属性
                newOptions.body = data;
            }

            // 发送请求
            useFetch(url, newOptions)
                .then((res) => {
                    resolve(res.data.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // 封装常用方法
    get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
        return this.request(url, "GET", params, options);
    }


    post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "POST", data, options);
    }


    Put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "PUT", data, options);
    }


    Delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
        return this.request(url, "DELETE", params, options);
    }
}

const httpRequest = new HttpRequest();

export default httpRequest;

