// 引入封装好的axios文件
import http from './axios'


// 轮播图接口
export function getBanner(){
    return http.post('/banner')
}