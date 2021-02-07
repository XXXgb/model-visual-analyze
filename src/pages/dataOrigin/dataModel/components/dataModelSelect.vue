<template>
  <div class="dm-select-wrapper">
      <data-model-title :flag="flag" @getEditStatus="getEditStatus" @saveConfig="saveConfig"></data-model-title>
      <data-model-config :flag="flag"></data-model-config>
      <data-model-schema :flag="flag" :saveStatus="saveStatus"></data-model-schema>
  </div>
</template>

<script>
import DataModelTitle from './dataModelTitle'
import DataModelConfig from './dataModelConfig'
import DataModelSchema from './dataModelSchema'
import NoModel from '@/components/noModel'
export default {
  components: {
    DataModelTitle,
    DataModelConfig,
    DataModelSchema,
    NoModel
  },
  data () {
    return {
      flag: '',
      saveStatus: false
    }
  },
  methods: {
    getEditStatus(flag){
      this.flag = flag;
    },

    saveConfig(data){
      this.saveStatus = data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dm-select-wrapper{
  width: 100%;
  height: 100%;
  border-left: 1px solid #e8e8e8;
  background-color: #fff;
}
</style>
