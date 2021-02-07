<template>
  <ul class="dr-etit-bar wrapper-height">
    <div span="24" @click.stop="clickNode(item)" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)" v-for="(item,index) in bar" :key="index" class="report-model-icon-box">
      <li>
        <i :class="['iconfont','icon-' + item.icon]"></i>
      </li>
    </div>
  </ul>
</template>

<script>

export default {
  data () {
    return {
      barArr: [
        {
          name: '表格',
          iconType: 'shujuxiangqing'
        },
        {
          name: '图表',
          iconType: 'barchart'
        },
        {
          name: '保存',
          iconType: 'save'
        },
        {
          name: '撤销',
          iconType: 'undo'
        },
        {
          name: '刷新',
          iconType: 'refresh'
        },
      ]
    }
  },
  computed:{
    bar:{
      get(){
        return this.$store.state.nodeData
      },
      set(){

      }
    }
  },
  mounted(){

  },
  methods: {
    clickNode(node){
      this.$store.commit('updateCurrentNode',node);
    },

    mouseEnter(item){
      this.$store.commit('updateHoverCurrentNode',item);
    },

    mouseLeave(){
      this.$store.commit('updateHoverCurrentNode',null);
    },
  },

}
</script>

<style lang="scss" scoped>
.dr-etit-bar{
  background-color: #f5f5f5;
  border-right: 1px solid #CCC;
  color: #8d929c;
  .report-model-icon-box{
    height: 35px;
    display: flex;
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
