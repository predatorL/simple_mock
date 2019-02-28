

let config = {};

const protocol = 'http:';
const origin_api = 'localhost:7001';

config.origin = `${protocol}//${origin_api}`;
config.host = `${protocol}//${origin_api}/api`;


window.$config = config;
