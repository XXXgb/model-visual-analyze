<template>
  <div class="dm-main">
    <no-model :noModelValue="noModelValue" v-if="showNoModel && $route.path == '/dataOrigin/dataModel'"></no-model>
    <data-model-select v-else></data-model-select>
  </div>
</template>

<script>
  import NoModel from '@/components/noModel';
  import DataModelSelect from './dataModelSelect';

  export default {
    props: ['selectModelValue'],
    components: {
      NoModel,
      DataModelSelect
    },
    data () {
      return {
        noModelValue: {
          title: '请在左侧新建或选择数据模型'
        },
        showNoModel: true,
      }
    },
    watch: {

      'selectModelValue': function (val) {
        if(val){
          this.showNoModel = false;
        }
      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .dm-main{
    width: 100%;
    height: 100%;
    border-left: 1px solid #e8e8e8;
    background-color: #fff;
  }
</style>
