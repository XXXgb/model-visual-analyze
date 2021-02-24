<template>
  <div class="dr-detail">
    <detail-body-a :fakeTableData="fakeTableData"></detail-body-a>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
  import DetailBodyA from './detailBodyA';
  import DetailFooter from './detailFooter';
export default {
  components: {
    DetailFooter,
    DetailBodyA
  },
  data () {
    return {
      fakeTableData:[
        {
          "订单号": 531,
          "年份": "2019",
          "省": "广东",
          "收货人手机": "13112133902",
          "订单总金额": 1350,
          "支付时间": "2019-01-03 ：16:42:04",
          "收货人": "许贵斌",
        },
        {
          "订单号": 361,
          "年份": "2019",
          "省": "江西",
          "收货人手机": "1324346456",
          "订单总金额": 1551,
          "支付时间": "2019-02-03 ：16:42:04",
          "收货人": "小红",
        },
        {
          "订单号": 391,
          "年份": "2018",
          "省": "海南",
          "收货人手机": "13544545511",
          "订单总金额": 954,
          "支付时间": "2018-02-03 ：16:42:04",
          "收货人": "小明",
        },
        {
          "订单号": 750,
          "年份": "2019",
          "省": "江苏",
          "收货人手机": "13954984115",
          "订单总金额": 1587,
          "支付时间": "2019-08-15 ：16:42:04",
          "收货人": "小刚",
        },
        {
          "订单号": 519,
          "年份": "2019",
          "省": "海南",
          "收货人手机": "1347894515",
          "订单总金额": 1478,
          "支付时间": "2019-09-15 ：16:42:04",
          "收货人": "小阿",
        },
      ],
    }
  },
  computed:{

  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>
.dr-detail{
  height: calc(100% - 45px);
  display: flex;
  align-items: center;
  position: relative;
}
</style>
