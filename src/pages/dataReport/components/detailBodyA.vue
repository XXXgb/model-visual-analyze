<template>
  <div class="dr-detail-body">
    <div class="huaban" id="huaban2" :style="{transform: 'scale(' + zoomValue/100 + ')'}">
      <div class="huaban-node" :id="item.id" :ref="item.id" v-for="(item,index) in nodeData" :key="index" :style="{width: item.chartStyle.nodeStyleForm.width+'px',height: item.chartStyle.nodeStyleForm.height+'px',zIndex: item.chartStyle.nodeStyleForm.zIndex,top: item.chartStyle.nodeStyleForm.top+'px',left: item.chartStyle.nodeStyleForm.left+'px', backgroundColor: item.chartStyle.nodeStyleForm.backgroundColor, borderStyle: item.chartStyle.nodeStyleForm.borderType, borderColor: item.chartStyle.nodeStyleForm.borderColor, borderWidth: item.chartStyle.nodeStyleForm.borderWidth + 'px', borderRadius: item.chartStyle.nodeStyleForm.borderRadius + 'px', boxShadow: item.chartStyle.nodeStyleForm.boxShadow ? ' 0px 0px 10px' + item.chartStyle.nodeStyleForm.borderColor : '0px 0px 0px' + item.chartStyle.nodeStyleForm.borderColor}">
        <div style="position: absolute;top: 0;left: 0;width: 100%;height: 30px;" v-if="item.chartConfig.type != ''" :style="item.chartStyle.titleForm.show ? { color: item.chartStyle.titleForm.color, fontSize: item.chartStyle.titleForm.fontSize + 'px', textAlign: item.chartStyle.titleForm.align, fontFamily: item.chartStyle.titleForm.fontType } : {}">
          {{item.chartStyle.titleForm.title}}
        </div>
        <div class="node-graphic" :id="item.chartId" :style="dbClickNodeValue.id == item.id ? {zIndex: 999} : item.chartConfig.type == '' ? {height: '100%',top: '0'} : {height: 'calc(100% - 30px)',top: '30px'}">
          <div class="node-title">
            <h2 v-html="item.type == 'table' ? '表格' : '图表'"></h2>
          </div>
          <div class="node-no-data-img">
            <img style="width: 80%;height: 80%;" :src="item.type ? '../../../../static/images/' + item.type + 'Node.png' : ''">
          </div>
        </div>
        <div class="node-move" :class="$store.state.hoverCurrentNode && $store.state.hoverCurrentNode.id == item.id ? 'node-move-hover' : ''" @mousedown.stop="moveMouseDown($event,item)" @mouseup.stop="moveMouseUp($event)">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import dataProcess from '@/util/dataProcess'
export default {
  props: ['fakeTableData'],
  data () {
    return {
      width: '1000',
      height: '760',
      moveX: '',
      moveY: '',
      chartObj: {},
      lastZIndex: '',
      dbClickNodeValue: {},
      resizeParams: {
        resizeNode: '',
        moveX: '',
        moveY: '',
        fWidth: '',
        fHeight: '',
        moveLeft: '',
        moveTop: ''
      }
    }
  },
  watch:{
    '$store.state.zoomValue': function (val) {
      this.width = 960 * (val / 100) + 40;
      this.height = 720 * (val / 100) + 40;
    },
    '$store.state.nodeData': function (val) {
      this.updateOneChart();
    }
  },
  computed:{
    zoomValue(){
      return this.$store.state.zoomValue
    },
    nodeData: {
      get(){
        return this.$store.state.nodeData
      },
      set(){

      }
    },
    selectNode: {
      get(){
        return this.$store.state.currentNode
      },
      set(){

      }
    }
  },
  mounted(){
    this.nodeData = this.$store.state.nodeData;
    this.initChart();
  },
  methods: {

    // 更新所有图表
    initChart(){
      console.log('更新所有图表')
      console.log(this.nodeData)
      // 指定图表的配置项和数据
      for(let key in this.nodeData){
        let chartType = this.nodeData[key].chartConfig.type;
        if(chartType){
          // 使用刚指定的配置项和数据显示图表
          this.chartObj[this.nodeData[key].chartId] = this.$echarts.init(document.getElementById(this.nodeData[key].chartId));
          console.log(this.getOption(chartType, this.nodeData[key]));
          this.chartObj[this.nodeData[key].chartId].setOption(this.getOption(chartType,this.nodeData[key]));
        }
        console.log(key)
      }

    },

    // 更新单个图表
    updateOneChart(){
      console.log('更新单个图表')
      let chartType = "";
      if(JSON.stringify(this.$store.state.currentNode) != "{}"){
        console.log(this.$store.state.currentNode);
        console.log(this.$store.state.nodeData[this.$store.state.currentNode.id]);
        chartType = this.$store.state.nodeData[this.$store.state.currentNode.id].chartConfig.type;
      }
      if(chartType){
        console.log('初始化了')
        // 使用刚指定的配置项和数据显示图表
        this.chartObj[this.$store.state.currentNode.chartId] = this.$echarts.init(document.getElementById(this.nodeData[this.$store.state.currentNode.id].chartId));
        let options = this.getOption(chartType,this.nodeData[this.$store.state.currentNode.id]);
        this.chartObj[this.$store.state.currentNode.chartId].setOption(options,true);
        console.log(options);
      }
    },

    getOption(chartType,nodeData){
      let option;
      console.log(chartType)
      if(chartType == 'bar'){
        console.log(1111111)
        option = dataProcess.processBar(nodeData,this.fakeTableData);
        console.log(option)

      }else if(chartType == 'line'){
        console.log(222222)
        option = dataProcess.processLine(nodeData,this.fakeTableData);
      }else if(chartType == 'pie'){
        console.log(333333333)
        option = dataProcess.processPie(nodeData,this.fakeTableData);
      }

      return option
    },




  },

}
</script>

<style lang="scss" scoped>
  .dr-detail-body{
    width: 100%;
    height: calc(100% - 32px);
    position: absolute;
    top: 0;
    background-color: #f5f5f5;
    overflow: auto;
    padding: 20px;
    .huaban{
      width: 1920px;
      height: 1080px;
      transform-origin: 0 0;
      position: absolute;
      /*background: rgb(0, 0, 0) none repeat scroll 0% 0%;*/
      background: url("../../../../static/images/screen-view-background1.png") no-repeat center center;
      background-size: 100% 100%;
      .huaban-node{
        position: absolute;
        .node-resize{
          width: 100%;
          height: 100%;
          border: 1px solid rgba(4, 43, 197, 0.6);
          z-index: 1;
          .resize-border{
            position: absolute;
            border: 3px solid #113ff7;
            width: 10px;
            height: 10px;
            z-index: 10;
          }
          .resize-top-left{
            margin-top: -2px;
            margin-left: -2px;
            top: 0;
            left: 0;
            cursor: nwse-resize;
            border-right: none;
            border-bottom: none;
          }
          .resize-top{
            margin-top: -2px;
            margin-left: -5px;
            top: 0;
            left: 50%;
            cursor: ns-resize;
            border-left: none;
            border-right: none;
            border-bottom: none;
            border-width: 5px;
          }
          .resize-top-right{
            margin-top: -2px;
            margin-left: -8px;
            top: 0;
            left: 100%;
            cursor: nesw-resize;
            border-left: none;
            border-bottom: none;
          }
          .resize-right{
            margin-top: -5px;
            margin-left: -8px;
            top: 50%;
            left: 100%;
            cursor: ew-resize;
            border-top: none;
            border-left: none;
            border-bottom: none;
            border-width: 5px;
          }
          .resize-bottom-right{
            margin-top: -8px;
            margin-left: -8px;
            top: 100%;
            left: 100%;
            cursor: nwse-resize;
            border-top: none;
            border-left: none;
          }
          .resize-bottom{
            margin-top: -8px;
            margin-left: -5px;
            top: 100%;
            left: 50%;
            cursor: ns-resize;
            border-top: none;
            border-left: none;
            border-right: none;
            border-width: 5px;
          }
          .resize-bottom-left{
            margin-top: -8px;
            margin-left: -2px;
            top: 100%;
            left: 0%;
            cursor: nesw-resize;
            border-top: none;
            border-right: none;
          }
          .resize-left{
            margin-top: -5px;
            margin-left: -2px;
            top: 50%;
            left: 0%;
            cursor: ew-resize;
            border-top: none;
            border-right: none;
            border-bottom: none;
            border-width: 5px;
          }
        }
        .node-move{
          width: 100%;
          height: 100%;
          cursor: move;
          z-index: 5;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
        .node-move-hover{
          border: 1px solid rgba(16,63,250,0.6);
        }
        .node-graphic{
          width: 100%;
          z-index: 1;
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          .node-title{
            height: 60px;
            line-height: 60px;
            padding-left: 20px;
            border-bottom: 1px solid #ccc;
          }
          .node-no-data-img{
            width: 100%;
            height: calc(100% - 60px);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
</style>
