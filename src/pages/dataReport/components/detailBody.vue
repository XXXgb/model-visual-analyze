<template>
  <div class="dr-detail-body">
    <div class="huaban" id="huaban" :style="{transform: 'scale(' + zoomValue/100 + ')'}" @click="clickHuaban">
      <div class="huaban-node" @dblclick="dbClickNode(item)" @click.ctrl.exact="deleteNode(item)" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)" :id="item.id" :ref="item.id" @click.stop="clickNode(item)" v-for="(item,index) in nodeData" :key="index" :style="{width: item.width+'px',height: item.height+'px',zIndex: item.zIndex,top: item.top+'px',left: item.left+'px',backgroundColor: item.backgroundColor}">
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
        <div class="node-graphic" :id="item.chartId" :style="dbClickNodeValue.id == item.id ? {zIndex: 999} : {}">
          <div class="node-title">
            <h2>表格</h2>
          </div>
          <div class="node-no-data-img">
            <img style="width: 80%;height: 80%;" :src="item.type == 'table' ? '../../../../static/images/' + item.type + 'Node.png' : ''">
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
      dbClickNodeValue: {}
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
    this.bindKeyboard();
    this.initChart();
  },
  methods: {
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
      this.$store.commit('updateCurrentNode',{});
      this.dbClickNodeValue = {};
    },

    // 调整容器大小
    resizeMouseDown(event,node,type){
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
        switch (type) {
          case 'right':
            resizeNode.style.width = fWidth+(event.clientX - moveX)+'px';
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
      window.onmouseup = ()=>{
        // 更新位置
        this.$store.commit('updateNode',{
          [this.selectNode.id]: {
            ...this.$store.state.nodeData[this.selectNode.id],
            top: this.$refs[this.selectNode.id][0].style.top.slice(0,this.$refs[this.selectNode.id][0].style.top.length-2),
            left: this.$refs[this.selectNode.id][0].style.left.slice(0,this.$refs[this.selectNode.id][0].style.left.length-2),
            width: resizeNode.style.width.slice(0,resizeNode.style.width.length-2),
            height: resizeNode.style.height.slice(0,resizeNode.style.height.length-2),
          }
        });
        try {
          // 更新echarts图表大小
          this.chartObj[this.selectNode.chartId].resize();
        }
        catch (e) {

        }

        window.onmousemove = null;
        console.log(this.nodeData)
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
          top: this.$refs[this.selectNode.id][0].style.top.slice(0,this.$refs[this.selectNode.id][0].style.top.length-2),
          left: this.$refs[this.selectNode.id][0].style.left.slice(0,this.$refs[this.selectNode.id][0].style.left.length-2),
          width: resizeNode.style.width.slice(0,resizeNode.style.width.length-2),
          height: resizeNode.style.height.slice(0,resizeNode.style.height.length-2),
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
      let chartType = "";
      if(JSON.stringify(this.$store.state.currentNode) != "{}"){
        chartType = this.$store.state.nodeData[this.$store.state.currentNode.id].chartConfig.type;
      }
      if(chartType){
        // 使用刚指定的配置项和数据显示图表
        this.chartObj[this.$store.state.currentNode.chartId] = this.$echarts.init(document.getElementById(this.nodeData[this.$store.state.currentNode.id].chartId));
        this.chartObj[this.$store.state.currentNode.chartId].setOption(this.getOption(chartType,this.nodeData[this.$store.state.currentNode.id]));
      }
    },

    getOption(chartType,nodeData){
      let option;
      if(chartType == 'bar'){
        option = dataProcess.processBar(nodeData,this.fakeTableData);
      }else if(chartType == 'line'){
        option = dataProcess.processLine(nodeData,this.fakeTableData);
      }else if(chartType == 'pie'){
        option = option = {
          title : {
            text: '性别统计',
            subtext: '纯属虚构',
            x:'right'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['本科男','本科女','硕士男','硕士女']
          },
          series : [
            {
              name: '硕士',
              type: 'pie',
              radius : '55%',
              center: ['35%', '30%'],
              data:[
                {value:250, name:'硕士男'},
                {value:150, name:'硕士女'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: '本科',
              type: 'pie',
              radius: '55%',
              center: ['70%', '70%'],
              data: [
                {value: 500, name:'本科男'},
                {value: 300, name: '本科女'}
              ]
            }
          ]
        };;
      }

      return option
    },

    // 处理数据
    clsj(){

    }


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
    width: 960px;
    height: 720px;
    transform-origin: 0 0;
    position: absolute;
    background: rgb(234, 239, 244) none repeat scroll 0% 0%;
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
        height: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
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
