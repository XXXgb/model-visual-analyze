<template>
  <div class="side-right-box wrapper-height">
    <div class="side-right-title">
      <span>报告设置</span>
      <Icon type="md-more"  />
    </div>
    <div class="side-right-body">
      <div class="side-right-search">
        <Select v-model="dataOriginValue" clearable>
          <Option v-for="item in dataOriginList" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
        <Input style="margin-top: 5px;" y placeholder="搜索字段" />
      </div>
      <div class="side-right-field">
        <div class="side-right-field-title">
          <span>维度</span>
          <Icon type="md-add" />
        </div>
        <draggable v-model="arr1" :move="filterMoveX" :options="{group:{name: 'dimensionality',pull:'clone'},sort: true}" @start="dimensionalityStartDrag" @end="dimensionalityEndDrag">
          <transition-group>
            <!--<Tree :data="data1" expand-node></Tree>-->
            <div v-for="(item,index) in arr1" :key="index" class="side-right-draggable">
              <i :class="['iconfont','icon-' + item.type]"></i>
              <span>{{item.name}}</span>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="side-right-field">
        <div class="side-right-field-title">
          <span>度量</span>
          <Icon type="md-add" />
        </div>
        <draggable v-model="arr2" :move="filterMoveY" :options="{group:{name: 'measurement',pull:'clone'},sort: true}" @start="measurementStartDrag" @end="measurementEndDrag">
          <transition-group>
            <!--<Tree :data="data1" expand-node></Tree>-->
            <div v-for="(item,index) in arr2" :key="index" class="side-right-draggable">
              <i :class="['iconfont','icon-' + item.type]"></i>
              <span>{{item.name}}</span>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
import StyleConfig from './styleConfig'
export default {
  components: {
    StyleConfig,
    draggable
  },
  data () {
    return {
      dataOriginValue: '',
      dataOriginList: [
        {
          value: '花名册',
          label: '花名册'
        },
        {
          value: '超市500',
          label: '超市500'
        },
        {
          value: '32强国家',
          label: '32强国家'
        }
      ],
      arr1: [],
      arr2: []
    }
  },
  computed:{

  },
  mounted(){
    this.arr1 = JSON.parse(localStorage.getItem('dimensionality'));
    this.arr2 = JSON.parse(localStorage.getItem('measurement'));
  },
  methods: {
    // 维度开始拖拽
    dimensionalityStartDrag(e){
      this.$store.commit('changeDragNodeType',{
        type: 'dimensionality',
        status: true
      })
    },

    // 维度结束拖拽
    dimensionalityEndDrag(e){
      this.$store.commit('changeDragNodeType',{
        type: 'dimensionality',
        status: false
      })
    },

    // 度量开始拖拽
    measurementStartDrag(e){
      this.$store.commit('changeDragNodeType',{
        type: 'measurement',
        status: true
      })
    },

    // 度量结束拖拽
    measurementEndDrag(e){
      this.$store.commit('changeDragNodeType',{
        type: 'measurement',
        status: false
      })
    },

    // 禁止拖拽
    filterMoveX(e){
      let data = this.$store.state.currentNode;
      if(JSON.stringify(data) == '{}') return false;
      switch (data.chartConfig.type) {
        // 柱状图
        case 'bar':
          console.log(data.dimensionality.length);
          if(data.dimensionality.length == 0){
            return true;
          }else{
            return false;
          }
          break;
        // 折线图
        case 'line':
          if(data.dimensionality.length == 0){
            return true;
          }else{
            return false;
          }
          break;
      }
    },

    // 禁止拖拽
    filterMoveY(e){
      let data = this.$store.state.currentNode;
      if(JSON.stringify(data) == '{}') return false;
      switch (data.chartConfig.type) {
        // 柱状图
        case 'bar':
          if(data.measurement.length == 0){
            return true;
          }else{
            return true;
          }
          break;
        // 折线图
        case 'line':
          if(data.measurement.length == 0){
            return true;
          }else{
            return true;
          }
          break;
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.side-right-box{
  background: #fff;
  border-right: 1px solid #CCC;
  border-left: 1px solid #CCC;
  .side-right-title{
    height: 36px;
    font-size: 14px;
    border-bottom: 1px solid #CCC;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    i{
      position: absolute;
      right: 8px;
      font-size: 14px;
    }
  }
  .side-right-body{
    height: calc(100% - 36px);
    background: #f5f5f5;
    .side-right-search{
      padding: 10px;
    }
    .side-right-field{
      height: calc((100% - 89px) / 2);
      border-top: 1px solid #CCC;
      padding: 0 10px;
      overflow: auto;
      .side-right-field-title{
        height: 36px;
        display: flex;
        align-items: center;
        position: relative;
        i{
          position: absolute;
          right: 0;
        }
      }
      .side-right-draggable:hover{
        cursor: pointer;
        background-color: #4a90e2;
        color: #fff;
      }
    }
  }



}
</style>
