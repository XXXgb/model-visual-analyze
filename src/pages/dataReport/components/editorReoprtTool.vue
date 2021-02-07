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
              width: 200,
              height: 200,
              zIndex: '1',
              top: 20,
              left: 20,
              backgroundColor: '#fff',
              dimensionality: [],
              measurement: [],
              chartConfig: {}
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
              width: 200,
              height: 200,
              zIndex: '1',
              top: 20,
              left: 20,
              backgroundColor: '#fff',
              dimensionality: [],
              measurement: [],
              chartConfig: {}
            }
          });
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
