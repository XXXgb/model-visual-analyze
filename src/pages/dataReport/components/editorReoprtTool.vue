<template>
  <ul class="dr-etit-bar wrapper-height">
    <div span="24" v-for="(item,index) in barArr" :key="index" class="report-model-icon-box" @click="clickTool(item)">
      <i :class="['iconfont','icon-' + item.iconType]"></i>
      <div>{{item.name}}</div>
    </div>
  </ul>
</template>

<script>

  import util from '@/util/util'
export default {
  data () {
    return {
      barArr: [
        {
          name: '表格',
          type: 'table',
          iconType: 'shujuxiangqing'
        },
        {
          name: '图表',
          type: 'chart',
          iconType: 'barchart'
        },
        {
          name: '保存',
          type: 'save',
          iconType: 'save'
        },
        {
          name: '撤销',
          type: 'backout',
          iconType: 'undo'
        },
        {
          name: '刷新',
          type: 'refresh',
          iconType: 'refresh'
        },
        {
          name: '全屏',
          type: 'fullScreen',
          iconType: 'refresh'
        },
      ]
    }
  },
  computed:{

  },
  methods: {
    clickTool(data){
      let id = util.getUuid();
      switch (data.type) {
        case 'table':
          this.$store.commit('updateNode',{
            [id]: {
              id: id,
              chartId: id + 21,
              type: 'table',
              icon: 'shujuxiangqing',
              dimensionality: [],
              measurement: [],
              chartConfig: {
                type: ''
              },
              chartStyle: {
                nodeStyleForm: {
                  width: 200,
                  height: 200,
                  zIndex: '1',
                  top: 20,
                  left: 20,
                  backgroundColor: '#000',
                  borderRadius: 0,
                  boxShadow: false,
                  borderColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: '1',
                  borderType: 'solid'
                },
                xForm: {
                  showXAxis: true,
                  xAxisTurn: false,
                  xAxisBorderType: 'solid',
                  xAxisBorderWidth: '1',
                  xAxisBorderColor: '#d9d9d9',
                  showLabelFont: true,
                  labelFontTypt: 'sans-serif',
                  labelFontSize: '12',
                  labelFontColor: '#d9d9d9',
                  textDirection: '0',
                },
                yForm: {
                  showYAxis: true,
                  yAxisTurn: false,
                  yAxisBorderType: 'solid',
                  yAxisBorderWidth: '1',
                  yAxisBorderColor: '#d9d9d9',
                  showLabelFont: true,
                  labelFontTypt: 'sans-serif',
                  labelFontSize: '12',
                  labelFontColor: '#d9d9d9',
                  textDirection: '0',
                },
                titleForm: {
                  show: true,
                  title: '未命名',
                  color: '#fff',
                  fontSize: 20,
                  fontType: 'sans-serif',
                  align: 'center'
                },
                plottingForm: {
                  levelSplitLine: false,
                  verticalSplitLine: false,
                  lineColor: '#d9d9d9',
                  lineType: 'solid',
                  backgroundColor: '',
                  borderColor: ''
                },
                legendForm: {
                  show: true,
                  fontColor: '#d9d9d9',
                  fontSize: 12,
                  fontType: 'sans-serif',
                  direction: 'top'
                },
                chartStyleForm: {
                  shape: 'more',
                  direction: 'level'
                }
              }
            }
          });
          break;
        case 'chart':
          this.$store.commit('updateNode',{
            [id]: {
              id: id,
              chartId: id + 21,
              type: 'chart',
              icon: 'barchart',
              dimensionality: [],
              measurement: [],
              chartConfig: {
                type: ''
              },
              chartStyle: {
                nodeStyleForm: {
                  width: 200,
                  height: 200,
                  zIndex: '1',
                  top: 20,
                  left: 20,
                  backgroundColor: '#000',
                  borderRadius: 0,
                  boxShadow: false,
                  borderColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: '1',
                  borderType: 'solid'
                },
                xForm: {
                  showXAxis: true,
                  xAxisTurn: false,
                  xAxisBorderType: 'solid',
                  xAxisBorderWidth: '1',
                  xAxisBorderColor: '#d9d9d9',
                  showLabelFont: true,
                  labelFontTypt: 'sans-serif',
                  labelFontSize: '12',
                  labelFontColor: '#d9d9d9',
                  textDirection: '0',
                },
                yForm: {
                  showYAxis: true,
                  yAxisTurn: false,
                  yAxisBorderType: 'solid',
                  yAxisBorderWidth: '1',
                  yAxisBorderColor: '#d9d9d9',
                  showLabelFont: true,
                  labelFontTypt: 'sans-serif',
                  labelFontSize: '12',
                  labelFontColor: '#d9d9d9',
                  textDirection: '0',
                },
                titleForm: {
                  show: true,
                  title: '未命名',
                  color: '#fff',
                  fontSize: 20,
                  fontType: 'sans-serif',
                  align: 'center'
                },
                plottingForm: {
                  levelSplitLine: false,
                  verticalSplitLine: false,
                  lineColor: '#d9d9d9',
                  lineType: 'solid',
                  backgroundColor: '',
                  borderColor: ''
                },
                legendForm: {
                  show: true,
                  fontColor: '#d9d9d9',
                  fontSize: 12,
                  fontType: 'sans-serif',
                  direction: 'top'
                },
                chartStyleForm: {
                  shape: 'more',
                  direction: 'level'
                }
              }
            }
          });
          break;
        case 'fullScreen':
          let element = document.getElementById('huaban');
          console.log(element);
          var requestMethod = element.requestFullScreen || //W3C
            element.webkitRequestFullScreen || //Chrome等
            element.mozRequestFullScreen || //FireFox
            element.msRequestFullScreen; //IE11
          if (requestMethod) {
            requestMethod.call(element);
          }else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
              wscript.SendKeys("{F11}");
            }
          }
          break;
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.dr-etit-bar{
  background-color: #f5f5f5;
  border-right: 1px solid #CCC;
  color: #8d929c;
  .report-model-icon-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .report-model-icon-box:hover{
    cursor: pointer;
    color: #fff;
    background: #103ffa;
  }
}
</style>
