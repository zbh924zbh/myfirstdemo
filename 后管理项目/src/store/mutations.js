export default {
    //修改state菜单
    REQ_MENULIST(state,payload){
        state.menuList = payload
    },
    //修改state角色
    REQ_ROLELIST(state,payload){
        state.roleList = payload
    },
    //修改state角色
    REQ_USERLIST(state,payload){
        state.userList = payload
    },
    //修改state商品
    REQ_CATELIST(state,payload){
        state.cateList = payload
    },
    //修改state商品规格
    REQ_SPECSLIST(state,payload){
        state.specsList = payload
    },
    //修改state商品管理
    REQ_GOODSLIST(state,payload){
        state.goodsList = payload
    }
}