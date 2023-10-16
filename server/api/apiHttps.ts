import httpRequest from "~/server";

/**
 * @description 请求列表接口
 * @returns 列表数据
 */
const getListData = (params: unknown) => {
    return httpRequest.get("http://121.36.81.61:8000/getTenArticleList", params);
};


/**
 * 只在客户端侧发起请求
 * @description 修改数据
 * @param {any} data
 * @returns {any}
 */
const editListData = (data: unknown) => {
    return httpRequest.post("/test", data, {
        server: false,
    });
};

export {getListData, editListData};

