import request from '../utils/request';
import url from './path'
import { http } from './axios'

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
function login (data) {
    return http('https://rap2api.mumzone.cn//app/mock/45/POST/login', data, 'POST')
}

function roleTree (data) {
    return http(url.roleTree, data, 'POST')
}

export {
    login,
    roleTree,
}
