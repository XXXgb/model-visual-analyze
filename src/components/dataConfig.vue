<template>
  <div class="data-config-box">
    <Collapse v-model="value2">
      <Panel name="1">
        X轴
        <div slot="content" class="collapse-content-box">
          <draggable v-model="xValue" :disbaled="xDisabled" @add="addDimensionality" group="dimensionality" class="draggable-box" :style="showInsertSite.type == 'dimensionality' && showInsertSite.status == true ? {background:'#e9ebee',borderRadius: '10px'} : ''">
            <transition-group>
              <!--<Tree :data="data1" expand-node></Tree>-->
              <div v-for="(item,index) in xValue" :key="index" class="side-right-draggable">
                <!--<i :class="['iconfont','icon-' + item.type]"></i>-->
                <span>{{item.name}}</span>
              </div>
            </transition-group>
          </draggable>
          <div class="side-right-nodata">
            拖入字段
          </div>
        </div>
      </Panel>
      <Panel name="2">
        Y轴
        <div slot="content" class="collapse-content-box">
          <draggable v-model="yValue" @add="addMeasurement" group="measurement" class="draggable-box":style="showInsertSite.type == 'measurement' && showInsertSite.status == true ? {background:'#e9ebee',borderRadius: '10px'} : ''">
            <transition-group>
              <!--<Tree :data="data1" expand-node></Tree>-->
              <div v-for="(item,index) in yValue" :key="index" class="side-right-draggable">
                <!--<i :class="['iconfont','icon-' + item.type]"></i>-->
                <span>{{item.name}}</span>
              </div>
            </transition-group>
          </draggable>
          <div class="side-right-nodata">
            拖入字段
          </div>
        </div>
      </Panel>
      <Panel name="3">
        属性
        <div slot="content" class="collapse-content-box">
          <Select v-model="chartType" @on-change="selectChart">
            <!--<Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />-->
            <i :class="['iconfont',chartIcon]" slot="prefix"></i>
            <Option v-for="(item,index) in chartList" :value="item.type" :label="item.title">
              <span>{{item.title}}</span>
              <span style="float:right;color:#ccc">
                <i :class="['iconfont',item.icon]"></i>
              </span>
            </Option>
          </Select>
        </div>
      </Panel>
      <Panel name="4">
        数据筛选
        <div slot="content" class="collapse-content-box">
          <draggable v-model="filterValue" group="measurement dimensionality" class="draggable-box":style="showInsertSite.type == 'measurement' && showInsertSite.type == 'dimensionality' ? {background:'#e9ebee',borderRadius: '10px'} : ''">
            <transition-group>
              <!--<Tree :data="data1" expand-node></Tree>-->
              <div v-for="(item,index) in filterValue" :key="index" class="side-right-draggable">
                <!--<i :class="['iconfont','icon-' + item.type]"></i>-->
                <span>{{item.name}}</span>
              </div>
            </transition-group>
          </draggable>
          <div class="side-right-nodata">
            拖入字段
          </div>
        </div>
      </Panel>
      <Panel name="5">
        提示信息
        <p slot="content"></p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      chartType: 'table',
      chartIcon: 'icon-shujuxiangqing',
      chartList: [
        /*{
          title: '表格',
          type: 'table',
          icon: 'icon-shujuxiangqing'
        },*/
        {
          title: '柱状图',
          type: 'bar',
          icon: 'icon-barchart'
        },
        /*{
          title: '区域图',
          type: 'area',
          icon: 'icon-area-chart'
        },*/
        {
          title: '折线图',
          type: 'line',
          icon: 'icon-linechart'
        },
        {
          title: '饼图',
          type: 'pie',
          icon: 'icon-pie-f'
        },
        /*{
          title: '环形图',
          type: 'Ring',
          icon: 'icon-Ring-Chart'
        },
        {
          title: '散点图',
          type: 'scatter',
          icon: 'icon-scatter_plot_px_rounded'
        },
        {
          title: '填充地图',
          type: 'earth',
          icon: 'icon-earth1'
        },
        {
          title: '甘特图',
          type: 'gantt',
          icon: 'icon-gantt'
        }*/
      ],
      value2: [1,2,3,4,5],
      xValue: this.$store.state.currentNode ? this.$store.state.nodeData[this.$store.state.currentNode.id].dimensionality : [],
      xTitle: [
        {
          name: '拖入字段'
        }
      ],
      yValue: this.$store.state.currentNode ? this.$store.state.nodeData[this.$store.state.currentNode.id].measurement : [],
      filterValue: [],
      xDisabled: false
    }
  },
  computed: {
    showInsertSite: {
      get(){
        return this.$store.state.dragNodeType
      },
      set(){

      }
    }
  },
  watch:{
    '$store.state.currentNode':function (val) {
      // console.log(this.$store.state.nodeData[this.$store.state.currentNode.id]);
      if (JSON.stringify(val) != "{}") {
        this.noDrag(val);
        // console.log(this.$store.state.nodeData[val.id].dimensionality)
        this.xValue = this.$store.state.nodeData[val.id].dimensionality;
        this.yValue = this.$store.state.nodeData[val.id].measurement;
      } else {
        this.xDisabled = true;
        this.xValue = [];
        this.yValue = [];
      }
    }
  },
  methods: {
    selectChart(data){
      switch (data) {
        case 'table':
          this.chartIcon = 'icon-shujuxiangqing';
          break;
        case 'bar':
          this.chartIcon = 'icon-barchart';
          break;
        case 'area':
          this.chartIcon = 'icon-area-chart';
          break;
        case 'line':
          this.chartIcon = 'icon-linechart';
          break;
        case 'pie':
          this.chartIcon = 'icon-pie-f';
          break;
        case 'Ring':
          this.chartIcon = 'icon-Ring-Chart';
          break;
        case 'scatter':
          this.chartIcon = 'icon-scatter_plot_px_rounded';
          break;
        case 'earth':
          this.chartIcon = 'icon-earth1';
          break;
        case 'gantt':
          this.chartIcon = 'icon-gantt';
          break;
      }
      console.log('选择了')
      console.log(data);
      this.$store.commit('updateNode',{
        [this.$store.state.currentNode.id]: {
          ...this.$store.state.nodeData[this.$store.state.currentNode.id],
          chartConfig: {
            ...this.$store.state.nodeData[this.$store.state.currentNode.id].chartConfig,
            type: data
          }
        }
      })
    },

    addDimensionality(data){
      console.log(data);
      console.log(this.xValue);
      this.$store.commit('updateNode',{
        [this.$store.state.currentNode.id]: {
          ...this.$store.state.nodeData[this.$store.state.currentNode.id],
          dimensionality: this.xValue
        }
      })
      // this.$store.state.nodeData[this.$store.state.currentNode.id].dimensionality = this.xValue;

    },

    addMeasurement(data){
      console.log(data);
      console.log(this.xValue);
      this.$store.commit('updateNode',{
        [this.$store.state.currentNode.id]: {
          ...this.$store.state.nodeData[this.$store.state.currentNode.id],
          measurement: this.yValue
        }
      })
      // this.$store.state.nodeData[this.$store.state.currentNode.id].dimensionality = this.xValue;

    },

    noDrag(data){
      switch (data.chartConfig.type) {
        // 柱状图
        case 'bar':
          if(data.dimensionality.length == 0){
            this.xDisabled = false;
          }else{
            this.xDisabled = true;
          }
          break;
        // 折线图
        case 'line':
          if(data.dimensionality.length == 0){
            this.xDisabled = false;
          }else{
            this.xDisabled = true;
          }
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.data-config-box{
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
  .side-right-draggable{
    background-color: #4a90e2;
    color: #fff;
    margin: 5px 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .draggable-box{
    min-height: 20px;
    span{
      display: inline-block;
      min-height: 100%;
      width: 100%;
      letter-spacing: 2px;
    }
  }
  .side-right-draggable:hover{
    cursor: pointer;
  }
  .side-right-nodata{
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
  }
  /deep/ .ivu-collapse-content{
    background-color: #f5f5f5;
  }
}
</style>
