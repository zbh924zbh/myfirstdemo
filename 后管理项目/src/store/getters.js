export default {
    //返回菜单
    get_MenuList(state){
        return state.menuList
    },
    //返回角色
    get_RoleList(state){
        return state.roleList
    },
    //返回管理员
    get_UserList(state){
        return state.userList
    },
    //返回商品分类
    get_CateList(state){
        return state.cateList
    },
    //返回商品规格
    get_SpecsList(state){
        return state.specsList
    },
    //返回商品管理
    get_GoodsList(state){
        return state.goodsList
    }
}