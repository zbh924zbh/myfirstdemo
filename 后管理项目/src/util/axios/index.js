//封装接口
//引入封装好的axios文件
import http from './axios'

/* ----菜单接口----- */
//添加菜单
export function getMenuAdd(data){
    return http.post('/menuadd',data)
}
//菜单列表接口
export function getMenuList(params){
    return http.get('/menulist',{
        params
    })
}
//菜单获取（一条）
export function getMenuInfo(params){
    return http.get('/menuinfo',{
        params
    })
}
//菜单编辑事件
export function getMenuEdit(data){
    return http.post('/menuedit',data)
}
//菜单删除事件
export function getMenuDel(data){
    return http.post('/menudelete',data)
}

/* ----角色接口----- */
//添加角色
export function getRoleAdd(data){
    return http.post('/roleadd',data)
}
//角色列表接口
export function getRoleList(){
    return http.get('/rolelist')
}
//角色获取（一条）
export function getRoleInfo(params){
    return http.get('/roleinfo',{
        params
    })
}
//角色编辑事件
export function getRoleEdit(data){
    return http.post('/roleedit',data)
}
//角色删除事件
export function getRoleDel(data){
    return http.post('/roledelete',data)
}


/* ----管理员接口----- */
//添加管理员
export function getUserAdd(data){
    return http.post('/useradd',data)
}
//管理员总数（用于计算分页）
export function getUserCount(){
    return http.get('/usercount')
}
//管理员列表接口(分页)
export function getUserList(params){
    return http.get('/userlist',{
        params
    })
}
//管理员获取（一条）
export function getUserInfo(params){
    return http.get('/userinfo',{
        params
    })
}
//管理员编辑事件
export function getUserEdit(data){
    return http.post('/useredit',data)
}
//管理员删除事件
export function getUserDel(data){
    return http.post('/userdelete',data)
}
//管理员登录
export function getLogin(data){
    return http.post('/userlogin',data)
}

/* ----商品分类接口----- */
//添加商品分类
export function getCateAdd(data){
    return http.post('/cateadd',data)
}
//商品分类列表接口
export function getCateList(params){
    return http.get('/catelist',{
        params
    })
}
//商品分类获取（一条）
export function getCateInfo(params){
    return http.get('/cateinfo',{
        params
    })
}
//商品分类编辑事件
export function getCateEdit(data){
    return http.post('/cateedit',data)
}
//商品分类删除事件
export function getCateDel(data){
    return http.post('/catedelete',data)
}

/* ----商品规格接口----- */
//添加商品规格
export function getSpecsAdd(data){
    return http.post('/specsadd',data)
}
//商品规格总数（用于计算分页）
export function getSpecsCount(){
    return http.get('/specscount')
}
//商品规格列表接口(分页)
export function getSpecsList(params){
    return http.get('/specslist',{
        params
    })
}
//商品规格获取（一条）
export function getSpecsInfo(params){
    return http.get('/specsinfo',{
        params
    })
}
//商品规格编辑事件
export function getSpecsEdit(data){
    return http.post('/specsedit',data)
}
//商品规格删除事件
export function getSpecsDel(data){
    return http.post('/specsdelete',data)
}

/* ----商品管理接口----- */
//添加商品管理
export function getGoodsAdd(data){
    return http.post('/goodsadd',data)
}
//商品管理总数（用于计算分页）
export function getGoodsCount(){
    return http.get('/goodscount')
}
//商品管理列表接口(分页)
export function getGoodsList(params){
    return http.get('/goodslist',{
        params
    })
}
//商品管理获取（一条）
export function getGoodsInfo(params){
    return http.get('/goodsinfo',{
        params
    })
}
//商品管理编辑事件
export function getGoodsEdit(data){
    return http.post('/goodsedit',data)
}
//商品管理删除事件
export function getGoodsDel(data){
    return http.post('/goodsdelete',data)
}