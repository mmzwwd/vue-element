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
function countrySave (data) {
    return http(url.countrySave, data, 'POST')
}
function countryList (data) {
    return http(url.countryList, data,)
}
function countryUpdate (data) {
    return http(url.countryUpdate, data, 'POST')
}
function countryDelete (data) {
    return http(url.countryDelete, data, 'POST')
}
export {
    login,
    roleTree,
    uploadFile,
    labelname,
    countrySave,
    countryList,
    countryUpdate,
    countryDelete,
}
