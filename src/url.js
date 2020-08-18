import request from './request.js'
//定义所有的接口

//加载登录信息
export const gettocken = (data) => {
    return request('/apis/login',{ 
    method:'post',
    data
    })
}
//加载首页信息
export const getmainPath = () => {
    return request('/apis/mainPath')
}
//加载图书推荐页信息
export const getShow = () =>{
    return request('/apis/bookShow')
}