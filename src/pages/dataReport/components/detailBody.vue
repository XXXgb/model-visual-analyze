<template>
  <div class="dr-detail-body">
    <div class="huaban" id="huaban" :style="{transform: 'scale(' + zoomValue/100 + ')',width: width + 'px', height: height + 'px'}" @click="clickHuaban">
      <div class="huaban-node" @dblclick="dbClickNode(item)" @click.ctrl.exact="deleteNode(item)" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)" :id="item.id" :ref="item.id" @click.stop="clickNode(item)" v-for="(item,index) in nodeData" :key="index" :style="{width: item.chartStyle.nodeStyleForm.width+'px',height: item.chartStyle.nodeStyleForm.height+'px',zIndex: item.chartStyle.nodeStyleForm.zIndex,top: item.chartStyle.nodeStyleForm.top+'px',left: item.chartStyle.nodeStyleForm.left+'px', backgroundColor: item.chartStyle.nodeStyleForm.backgroundColor, borderStyle: item.chartStyle.nodeStyleForm.borderType, borderColor: item.chartStyle.nodeStyleForm.borderColor, borderWidth: item.chartStyle.nodeStyleForm.borderWidth + 'px', borderRadius: item.chartStyle.nodeStyleForm.borderRadius + 'px', boxShadow: item.chartStyle.nodeStyleForm.boxShadow ? ' 0px 0px 10px' + item.chartStyle.nodeStyleForm.borderColor : '0px 0px 0px' + item.chartStyle.nodeStyleForm.borderColor}">
        <div class="node-resize" :style="item.id == selectNode.id ? {display: 'block'} : {display: 'none'}">
          <div class="resize-border resize-top-left" @mousedown.stop="resizeMouseDown($event,item,'topLeft')"></div>
          <div class="resize-border resize-top" @mousedown.stop="resizeMouseDown($event,item,'top')"></div>
          <div class="resize-border resize-top-right" @mousedown.stop="resizeMouseDown($event,item,'topRight')"></div>
          <div class="resize-border resize-right" @mousedown.stop="resizeMouseDown($event,item,'right')"></div>
          <div class="resize-border resize-bottom-right" @mousedown.stop="resizeMouseDown($event,item,'bottomRight')"></div>
          <div class="resize-border resize-bottom" @mousedown.stop="resizeMouseDown($event,item,'bottom')"></div>
          <div class="resize-border resize-bottom-left" @mousedown.stop="resizeMouseDown($event,item,'bottomLeft')"></div>
          <div class="resize-border resize-left" @mousedown.stop="resizeMouseDown($event,item,'left')"></div>
        </div>
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
      width: window.screen.width,
      height: window.screen.height,
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
        if(this.$store.state.currentNode){
          return this.$store.state.currentNode
        }else{
          return {}
        }

      },
      set(){

      }
    }
  },
  mounted(){
    this.nodeData = this.$store.state.nodeData;
    this.bindKeyboard();
    this.initChart();
    console.log(this.detectZoom());
  },
  methods: {
    detectZoom (){
      var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();

      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
      }
      else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
      }
      else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
      }

      if (ratio){
        ratio = Math.round(ratio * 100);
      }

      return ratio;
    },

    bindKeyboard(){
      let that = this;
      document.onkeyup = function(e) {
        let key = window.event.keyCode;
        if (key == 46) {
          that.deleteNode();
        }
      };
    },

    clickNode(node){
      this.$store.commit('updateCurrentNode',node);
    },

    clickHuaban(){
      console.log('点击了画板');
      this.$store.commit('updateCurrentNode',null);
      this.dbClickNodeValue = {};
    },

    // 调整容器大小
    resizeMouseDown(event,node,type){
      console.log('改变大小')
      this.$store.commit('updateCurrentNode',node);
      let resizeNode = document.getElementById(this.selectNode.id);
      let moveX,moveY,fWidth,fHeight,moveLeft,moveTop;
      switch (type) {
        case 'right':
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          break;
        case 'left':
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          this.moveX = event.pageX - this.$refs[this.selectNode.id][0].offsetLeft;
          break;
        case 'bottom':
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          break;
        case 'top':
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          this.moveY = event.pageY - this.$refs[this.selectNode.id][0].offsetTop;
          break;
        case 'topRight':
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          this.moveY = event.pageY - this.$refs[this.selectNode.id][0].offsetTop;
          break;
        case 'topLeft':
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          this.moveY = event.pageY - this.$refs[this.selectNode.id][0].offsetTop;
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          this.moveX = event.pageX - this.$refs[this.selectNode.id][0].offsetLeft;
          break;
        case 'bottomRight':
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          break;
        case 'bottomLeft':
          moveY = event.clientY;
          fHeight= resizeNode.offsetHeight;
          moveX = event.clientX;
          fWidth= resizeNode.offsetWidth;
          this.moveX = event.pageX - this.$refs[this.selectNode.id][0].offsetLeft;
          break;
      }

      window.onmousemove = (event)=>{
        console.log('改变大小22222')
        switch (type) {
          case 'right':
            resizeNode.style.width = fWidth+(event.clientX - this.resizeParams.moveX)+'px';
            break;
          case 'left':
            moveLeft = event.pageX - this.moveX + 'px';
            this.$refs[this.selectNode.id][0].style.left = moveLeft;
            resizeNode.style.width = fWidth-(event.clientX - moveX)+'px';
            break;
          case 'bottom':
            resizeNode.style.height = fHeight+(event.clientY - moveY)+'px';
            break;
          case 'top':
            moveTop = event.pageY - this.moveY + 'px';
            this.$refs[this.selectNode.id][0].style.top = moveTop;
            resizeNode.style.height = fHeight-(event.clientY - moveY)+'px';
            break;
          case 'topRight':
            moveTop = event.pageY - this.moveY + 'px';
            this.$refs[this.selectNode.id][0].style.top = moveTop;
            resizeNode.style.width = fWidth+(event.clientX - moveX)+'px';
            resizeNode.style.height = fHeight-(event.clientY - moveY)+'px';
            break;
          case 'topLeft':
            moveTop = event.pageY - this.moveY + 'px';
            moveLeft = event.pageX - this.moveX + 'px';
            this.$refs[this.selectNode.id][0].style.top = moveTop;
            this.$refs[this.selectNode.id][0].style.left = moveLeft;
            resizeNode.style.width = fWidth-(event.clientX - moveX)+'px';
            resizeNode.style.height = fHeight-(event.clientY - moveY)+'px';
            break;
          case 'bottomRight':
            resizeNode.style.width = fWidth+(event.clientX - moveX)+'px';
            resizeNode.style.height = fHeight+(event.clientY - moveY)+'px';
            break;
          case 'bottomLeft':
            resizeNode.style.height = fHeight+(event.clientY - moveY)+'px';
            moveLeft = event.pageX - this.moveX + 'px';
            this.$refs[this.selectNode.id][0].style.left = moveLeft;
            resizeNode.style.width = fWidth-(event.clientX - moveX)+'px';
            break;
        }
        // 设置最小宽度 20px
        if(resizeNode.style.width.slice(0,resizeNode.style.width.length-2)<=20){
          resizeNode.style.width = 20 + 'px';
        }
        // 设置最小高度 20px
        if(resizeNode.style.height.slice(0,resizeNode.style.height.length-2)<=20){
          resizeNode.style.height = 20 + 'px';
        }


      }
      window.onmouseup = (event)=>{
        window.onmousemove = null;
        console.log('删除鼠标释放事件')
        // 更新位置
        this.$store.commit('updateNode',{
          [this.selectNode.id]: {
            ...this.$store.state.nodeData[this.selectNode.id],
            chartStyle: {
              ...this.$store.state.nodeData[this.selectNode.id].chartStyle,
              nodeStyleForm: {
                ...this.$store.state.nodeData[this.selectNode.id].chartStyle.nodeStyleForm,
                top: this.$refs[this.selectNode.id][0].style.top.slice(0,this.$refs[this.selectNode.id][0].style.top.length-2),
                left: this.$refs[this.selectNode.id][0].style.left.slice(0,this.$refs[this.selectNode.id][0].style.left.length-2),
                width: resizeNode.style.width.slice(0,resizeNode.style.width.length-2),
                height: resizeNode.style.height.slice(0,resizeNode.style.height.length-2),
              },
            }
          }
        });
        try {
          // 更新echarts图表大小
          this.chartObj[this.selectNode.chartId].resize();
        }
        catch (e) {

        }


      }
    },

    // 移动容器的鼠标按下
    moveMouseDown (event,node) {
      this.$store.commit('updateCurrentNode',node);
      this.moveX = event.pageX - this.$refs[this.selectNode.id][0].offsetLeft;
      this.moveY = event.pageY - this.$refs[this.selectNode.id][0].offsetTop;
      // event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.moveMouseMove
    },

    // 移动容器的鼠标移动
    moveMouseMove (event) {
      let moveLeft = event.pageX - this.moveX + 'px';
      let moveTop = event.pageY - this.moveY + 'px';
      this.$refs[this.selectNode.id][0].style.left = moveLeft;
      this.$refs[this.selectNode.id][0].style.top = moveTop;
    },

    // 移动容器的鼠标释放
    moveMouseUp (event) {
      // 更新位置
      let resizeNode = document.getElementById(this.selectNode.id);
      this.$store.commit('updateNode',{
        [this.selectNode.id]: {
          ...this.$store.state.nodeData[this.selectNode.id],
          chartStyle: {
            ...this.$store.state.nodeData[this.selectNode.id].chartStyle,
            nodeStyleForm: {
              ...this.$store.state.nodeData[this.selectNode.id].chartStyle.nodeStyleForm,
              top: this.$refs[this.selectNode.id][0].style.top.slice(0,this.$refs[this.selectNode.id][0].style.top.length-2),
              left: this.$refs[this.selectNode.id][0].style.left.slice(0,this.$refs[this.selectNode.id][0].style.left.length-2),
              width: resizeNode.style.width.slice(0,resizeNode.style.width.length-2),
              height: resizeNode.style.height.slice(0,resizeNode.style.height.length-2),
            },
          }
        }
      });
      window.onmousemove = null;
    },

    // 删除节点
    deleteNode(){
      let data = this.$store.state.currentNode;
      if(JSON.stringify(this.$store.state.currentNode) != '{}'){
        this.$store.commit('deleteNode',data.id);
        this.$store.commit('updateCurrentNode',{});
      }

    },

    // 鼠标移入显示边框
    mouseEnter(item){
      this.$store.commit('updateHoverCurrentNode',item);
    },

    // 鼠标移出隐藏边框
    mouseLeave(){
      this.$store.commit('updateHoverCurrentNode',null);
    },

    dbClickNode(data){
      console.log('dbc');
      this.dbClickNodeValue = data;
    },

    // 更新所有图表
    initChart(){
      console.log('更新所有图表')
      // 指定图表的配置项和数据
      for(let key in this.nodeData){
        let chartType = this.nodeData[key].chartConfig.type;
        if(chartType){
          // 使用刚指定的配置项和数据显示图表
          this.chartObj[this.nodeData[key].chartId] = this.$echarts.init(document.getElementById(this.nodeData[key].chartId));
          this.chartObj[this.nodeData[key].chartId].setOption(this.getOption(chartType,this.nodeData[key]));
        }
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
      if(chartType == 'bar'){
        try {
          option = dataProcess.processBar(nodeData,this.fakeTableData);
        }
        catch (e) {

        }

      }else if(chartType == 'line'){
        option = dataProcess.processLine(nodeData,this.fakeTableData);
      }else if(chartType == 'pie'){
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
