import request from './request.js'
//定义所有的接口

//加载登录信息
export const gettocken = (data) => {
    // /apis/login//mock测试
    return request('https://mockapi.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771/api/login',{ 
    method:'post',
    data
    })
}
//加载首页信息
export const getmainPath = () => {
    // /apis/mainPayh
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/mianPath')
}
//加载图书推荐页信息
//词云图
export const getwordsCloud = () =>{
    // /apis/bookShow
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/wordsCloud')
}
export const showBooks = () =>{
    // /apis/bookShow
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/showBooks')
}
//修改密码
export const changePass = () =>{
    // /apis/bookShow
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/changePass')
}

export const inputData = () =>{
    // /apis/bookShow
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/inputData',{ 
        method:'post',
        data
        })
}