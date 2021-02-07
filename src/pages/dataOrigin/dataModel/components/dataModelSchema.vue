<template>
  <div class="dm-schema-main">
    <div class="dm-schema-titlebar">
      <span>设置数据模型</span>
      <a v-if="flag === 2">批量编辑字段</a>
      <a v-if="flag === 2">批量设置数据格式</a>
    </div>
    <Row class="dm-schema-body">
      <Col span="12" style="height: 100%;">
        <dimension-table :flag="flag" configType="dimensionality" :saveStatus="saveStatus"></dimension-table>
      </Col>
      <Col span="12" style="height: 100%;">
        <dimension-table :flag="flag" configType="measurement" :saveStatus="saveStatus"></dimension-table>
      </Col>
    </Row>
  </div>
</template>

<script>
import DimensionTable from '@/components/dimensionTable'
import WideTable from '@/components/wideTable'
export default {
  props: ['flag','saveStatus'],
  components: {
    DimensionTable,
    WideTable
  },
  data () {
    return {
      wideTableHeight: '',
    }
  },
  watch:{

  },
  mounted(){

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dm-schema-main{
  height: calc(100% - 355px);
  & .dm-schema-titlebar{
    height: 32px;
    padding: 5px 10px;
    & a{
      margin-left: 10px;
    }
  }
  .dm-schema-body{
    height: calc(100% - 32px);
  }
}
</style>
