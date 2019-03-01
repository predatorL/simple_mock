import axios from 'axios';
import qs from 'qs';

// 创建请求实例
const request = axios.create({
    baseURL: 'http://localhost:7001/api',
    timeout: 60 * 1000
})

export default request;
