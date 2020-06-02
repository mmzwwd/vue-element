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
    return http('https://rap2api.mumzone.cn//app/33mock/45/POST/login', data, 'POST')
}
function uploadFile (data) {
    return http('http://test2.mumzone.cn/egg_public/upload/uploadFile?token=SEhULVNFQ1RFVDoxNTkwMzkyMDEyOkZFNzA5NjZFRDQwMDAwMDBDODAwMDAwMDAwMUFFMDAw', data, 'POST')
}
function labelname (data) {
    return http('https://rap2api.mumzone.cn//app/mock/45/GET/labelname', data, )
}
function roleTree (data) {
    return http(url.roleTree, data, 'POST')
}
function save (data) {
    return http(url.save, data, 'POST')
}
export {
    login,
    roleTree,
    uploadFile,
    labelname,
    save,
}
