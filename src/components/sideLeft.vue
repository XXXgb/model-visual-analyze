<template>
  <div class="side-left-box wrapper-height">
    <div class="side-left-title">报告设置</div>
    <Tabs :value="showConfig" class="side-left-tabs">
      <TabPane label="数据" name="dataConfig" class="side-left-tabpane">
        <data-config></data-config>
      </TabPane>
      <TabPane label="样式" name="styleConfig">
        <style-config></style-config>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import DataConfig from './dataConfig'
import StyleConfig from './styleConfig'
export default {
  components: {
    StyleConfig,
    DataConfig
  },
  data () {
    return {
      showConfig: 'dataConfig'
    }
  },
  computed:{

  },
  watch: {

  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>
.side-left-box{
  background: #fff;
  border-right: 1px solid #CCC;
  border-left: 1px solid #CCC;
  .side-left-title{
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #CCC;
  }
  /deep/ .ivu-tabs-bar{
    margin-bottom: 0;
  }
  .side-left-tabs{
    height: calc(100% - 36px);
    /deep/ .ivu-tabs-content{
      height: 100%;
    }
    /deep/ .ivu-tabs-nav{
      width: 100%;
      /deep/ .ivu-tabs-tab{
        margin: 0;
        width: 50%;
        text-align: center;
      }
    }
    /deep/ .side-left-tabpane{
      height: calc(100% - 36px);
    }
  }
}
</style>
