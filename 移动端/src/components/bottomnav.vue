    <template>
      <div>
    <ul class="footer">    
        <router-link class="span" tag="span" style=" text-decoration: none;" active-class="color" to="/home" >
         <li class="active">
         <img src="../assets/images/public/icon_6.jpg" alt="">         
         </li> 
        <span class="spans">首页</span> 
         </router-link>       
          <router-link   class="span" tag="span" style=" text-decoration: none;" active-class="color" to="cartr" >
            <li class="active">  <img src="../assets/images/public/icon_7.jpg" alt="">
            </li>
              <span class="spans">购物车</span> 
            </router-link>    
         <router-link  class="span" tag="span" style=" text-decoration: none;" active-class="color" to="/mecon" >
          <li class="active">
            <img src="../assets/images/public/icon_5.jpg" alt=""> 
          </li>
              <span class="spans">个人中心</span> 
            </router-link>   
    </ul>
      </div>
      
</template>

<script>
export default {
    
}
</script>

<style lang="" scoped>
@import url("../assets/css/public.css");
.footer {
   width: 7.5rem;
   margin: 0 auto;
   height: 1.3rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eaeaea;
}
.footer li {
  flex: 1;
  text-decoration: none;
  line-height: 1rem;
  text-align: center;
  color: #333;
  text-align: center;
  align-self: center;

}
 img{
     margin-top: 0.2rem;
       width: 0.51rem;
  height: 0.51rem;
 }
 .span{
     text-align: center;
 }
.spans{
    font-size: 0.2rem;
}
 .color{
     color:orange;
 }
</style>