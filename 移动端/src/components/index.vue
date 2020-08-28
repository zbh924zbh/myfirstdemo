<template>
    <div>   
        <router-view></router-view>
         <nav1></nav1>
    </div>
</template>

<script>

import nav1 from"./bottomnav"
export default {
     components:{
         nav1
     }
}
</script>
<style scoped>
@import url('../assets/css/public.css');
</style>