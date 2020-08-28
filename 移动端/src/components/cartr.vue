<template>
  <div>
    <div class="wrap">
      <!-- 头 -->
      <ul class="uls">
        <li class="jiantou">
          <img src="../assets/images/order/jt.jpg" alt />
        </li>
        <li>
          <span>购物车</span>
        </li>
        <li class="shop">
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>

      <!-- 内容 -->
      <div class="content clearfix" v-for="(item,index) in datalist" :key="item.id">
        <!-- <div class="yuan fl">
              <img class="gou" src="../assets/images/shoping_car_images/select.jpg" alt="">   
           <input type="checkbox" class="gou">
        </div>-->
        <input class="yuan fl" type="checkbox" v-model="item.checked" />
        <img class="dx fl" :src="item.img" alt />
        <div class="jq fl">
          <span>{{item.name}}</span>
          <p>{{item.guge}}</p>
          <i>￥{{item.price}}</i>
        </div>
        <div class="sl fl">
          <div class="jian" @click="sub(index)">-</div>
          <div class="s">{{item.num}}</div>
          <div class="jia" @click="add(index)">+</div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="jiesuan">
        <div class="lis">
          <!-- <div class="yuan3 fl">
                    <img class="gou" src="../assets/images/shoping_car_images/select.jpg" alt="">   
                  <input type="checkbox" class="gou">
          </div>-->
          <input class="yuan3 fl" type="checkbox" v-model="allCheck" @change="checkAll" />
          <span class="fl">全选</span>
        </div>

        <div class="lis1">
          <span>总计：{{allPrice}}￥</span>
        </div>

        <div class="lis2">去结算</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCheck: false,
      datalist: [
        {
          id: 1,
          img: require("../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          guge: "规格:50g",
          num: 1,
          price: "132.00",
        },
        {
          id: 2,
          img: require("../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          guge: "规格:50g",
          num: 1,
          price: "132.00",
        },
        {
          id: 3,
          img: require("../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          guge: "规格:50g",
          num: 1,
          price: "132.00",
        },
      ],
    };
  },
  methods: {
    sub(i) {
      if (this.datalist[i].num == 1) {
        return;
      }
      this.datalist[i].num--;
    },
    add(i) {
      this.datalist[i].num++;
    },
    checkAll() {
      this.datalist.map((item) => {
        item.checked = this.allCheck;
      });
    },
  },
  watch: {
    datalist: {
      deep: true,
      handler() {
        this.allCheck = this.datalist.every((item) => item.checked);
      },
    },
  },
  computed: {
    allPrice() {
      let sum = 0;
      this.datalist.map((item) => {
        // if (item.checked) {
          
        // }
        sum += item.price * item.num;
      });
      return sum.toFixed(2);
    },
  },
};
</script>
<style>
@import url("../assets/css/shoping.css");
</style>