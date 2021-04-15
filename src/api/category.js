import request from './index'

export default {
    getCategory(id) {
        return request({
            url: '/category/' + id,
            method: 'GET'
        })
    },
    search(params) {
        return request({
            url: '/category/search',
            method: 'GET',
            params: params
        })
    },
    update: params => {
        return request({
            url: '/category/' + params.id + '/' + params.name,
            method: 'put'
        })
    },
    check: name => {
        return request({
            url: '/category/check/' + name,
            method: 'get'
        })
    },
    add: name => {
        return request({
            url: '/category/' + name,
            method: 'post'
        })
    }
}