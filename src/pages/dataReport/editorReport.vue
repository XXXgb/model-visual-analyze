<template>
  <Row class="dr-editor-report wrapper-height">
    <Col span="1" class="wrapper-height">
      <editor-report-bar></editor-report-bar>
    </Col>
    <Col span="1" class="wrapper-height">
      <editor-report-tool></editor-report-tool>
    </Col>
    <Col span="16" class="wrapper-height">
      <detail-body :fakeTableData="fakeTableData"></detail-body>
      <detail-footer></detail-footer>
    </Col>
    <Col span="6" class="wrapper-height">
      <report-side></report-side>
    </Col>
  </Row>
</template>

<script>
  import EditorReportBar from './components/editorReoprtBar'
  import EditorReportTool from './components/editorReoprtTool'
  import DetailBody from './components/detailBody';
  import DetailFooter from './components/detailFooter';
  import ReportSide from './components/reportSide'
export default {
  components: {
    EditorReportBar,
    EditorReportTool,
    DetailBody,
    DetailFooter,
    ReportSide
  },
  data () {
    return {
      fromC: 2,  // 来自哪个父组件的引用 1.dataModel 2.dataReport
      fakeTableData:[
        {
          "订单号": "wedljfljwefoiwejf",
          "年份": "2019",
          "省": "广东",
          "收货人手机": "13112133902",
          "订单总金额": "1350",
          "支付时间": "2019-01-03 ：16:42:04",
          "收货人": "许贵斌",
        },
        {
          "订单号": "ooweognewojnjowe",
          "年份": "2019",
          "省": "江西",
          "收货人手机": "1324346456",
          "订单总金额": "551",
          "支付时间": "2019-02-03 ：16:42:04",
          "收货人": "小红",
        },
        {
          "订单号": "oweifiweng",
          "年份": "2018",
          "省": "海南",
          "收货人手机": "13544545511",
          "订单总金额": "954",
          "支付时间": "2018-02-03 ：16:42:04",
          "收货人": "小明",
        },
        {
          "订单号": "ofjewiofiwenfwewe",
          "年份": "2019",
          "省": "江苏",
          "收货人手机": "13954984115",
          "订单总金额": "15987",
          "支付时间": "2019-08-15 ：16:42:04",
          "收货人": "小刚",
        },
        {
          "订单号": "ovwevowevwe",
          "年份": "2019",
          "省": "海南",
          "收货人手机": "1347894515",
          "订单总金额": "1478",
          "支付时间": "2019-09-15 ：16:42:04",
          "收货人": "小阿",
        },
      ]
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dr-editor-report{

}
</style>
