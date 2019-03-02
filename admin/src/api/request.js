import axios from 'axios';
import qs from 'qs';

// 创建请求实例
const instance = axios.create({
    baseURL: 'http://localhost:7001/api',
    timeout: 60 * 1000
})



// 添加响应拦截器
instance.interceptors.response.use(function (res) {
    let tempData = res.data || {
        id: 'SYSTEM_ERROR',
        status: -1,
        message: 'response is empty'
    }
    // 对响应数据做点什么
    // let status = tempData.status

    // if (status == 9999) {
    //     nowTime = +new Date();

    //     $.channel.emit('authorizeinvalid');

    //     if (nowTime - preTime > 600000) {
    //         preTime = nowTime;
    //         message.destroy();
    //         message.error(UPEX.lang.template('登录超时，请重新登录'))
    //     }
    // }

    return tempData;

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
