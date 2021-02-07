<template>
  <div class="dr-title">
    <span>
      超市500
      <Poptip placement="bottom" trigger="hover" width="400">
        <Icon type="md-cube" color="#103ffa" />
        <div class="api" slot="content">
          <p>创建: 2021年1月28日 11时16分</p>
          <p>最近修改: 2021年1月29日 11时16分</p>
        </div>
      </Poptip>
    </span>
    <div class="dt-button-wrapper">
      <Button type="primary" @click="editorReport">编辑报告</Button>
      <Button>刷新数据</Button>
      <Button>收藏</Button>
      <Button>导出</Button>
      <Button>发布</Button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed:{

  },
  methods: {
    editorReport(){
      this.$router.push({path: '/editorReport'})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dr-title{
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e8e8e8;
  & span{
    font-size: 18px;
  }
  .dt-button-wrapper{
    display: inline-block;
    margin-left: auto;
  }
}
</style>
