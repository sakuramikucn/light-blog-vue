/**
 * 文章相关接口请求
 */
import request from './index'

export function getArticle(id){
    return request({
        url: '/article/'+id,
        method: 'GET'
    })
}

/**
 * 搜索文章
 * @param param 
 * @returns 
 */
export function searchArticle(param) {

    return request({
        url: '/article/search',
        method: 'GET',
        params: param
    })
}

export function queryArticle(param) {
    return request({
        url: '/article/list',
        method: 'post',
        data: param
    })
}

export function updateArticle(params){
    return request({
        url: '/article',
        method: 'put',
        data: params
    })
}

export function removeArticle(id){
    return request({
        url: '/article/'+id,
        method: 'PUT',
    })
}

export function deleteArticle(id){
    return request({
        url: '/article/'+id,
        method: 'DELETE',
    })
}

export function addArticle(params){
    return request({
        url: '/article',
        method: 'POST',
        data: params
    })
}
