<template>
  <div>
    <el-container>
      <el-header>
        <h3>用户后台管理项目</h3>
        <div v-if="nickname">
          用户名：{{nickname}}
          <el-button @click='logout' type='danger' size='mini'>退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
       <v-nav></v-nav>
        </el-aside>
        <el-main>
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vNav from '../components/nav'
export default {
  data() {
    return {
      nickname:''
    };
  },
  mounted() {
    //获取登录信息
    let userInfo  = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
    this.nickname = userInfo.username
  },
  methods: {
    //退出事件
    logout(){
      //删除会话存储中登录的信息
      sessionStorage.removeItem('userInfo')
      //删除之后跳转回登录页
      this.$router.push('/login')
    }
  },
  components:{
      vNav
  }
};
</script>

<style  lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header {
  background: $oneBgColor;
}
</style>