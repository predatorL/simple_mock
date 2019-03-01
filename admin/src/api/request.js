import axios from 'axios';
import qs from 'qs';

// 创建请求实例
const request = axios.create({
    baseURL: window.$config.config.url,
    timeout: 60 * 1000
})

export default request;
