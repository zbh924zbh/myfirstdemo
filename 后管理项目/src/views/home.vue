<template>
  <div>
    <h1>欢迎光临</h1>
    <div id="con"></div>
  </div>
</template>

<script>
import Echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let myChart = Echarts.init(document.getElementById("con"));

    // 指定图表的配置项和数据
    // let option = {
    //   title: {
    //     text: "用户后台管理项目",
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ["用户"],
    //   },
    //   xAxis: {
    //     data: [
    //       "系统管理",
    //       "菜单管理",
    //       "商品管理",
    //       "商品分类",
    //       "会员管理",
    //       "限时秒杀",
    //     ],
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "用户",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20],
    //     },
    //   ],
    // };
    let option = {
      angleAxis: {
        max: 2,
        startAngle: 30,
        splitLine: {
          show: false,
        },
      },
      radiusAxis: {
        type: "category",
        data: ["v", "w", "x", "y", "z"],
        z: 10,
      },
      polar: {},
      series: [
        {
          type: "bar",
          data: [5,4, 3, 2, 1, 0],
          coordinateSystem: "polar",
          name: "系统管理",
          color: "rgba(200, 0, 0, 0.5)",
          itemStyle: {
            borderColor: "red",
            borderWidth: 1,
          },
        },
        {
          type: "bar",
          data: [5,4, 3, 2, 1, 0],
          coordinateSystem: "polar",
          name: "商城管理",
          roundCap: true,
          color: "rgba(0, 200, 0, 0.5)",
          itemStyle: {
            borderColor: "green",
            borderWidth: 1,
          },
        },
      ],
      legend: {
        show: true,
        data: ["系统管理", "商城管理"],
      },
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<style lang="" scoped>
#con {
  width: 800px;
  height: 500px;
}
</style>
