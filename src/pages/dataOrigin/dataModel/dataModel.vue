<template>
  <Row class="wrapper-height">
    <Col span="4" class="wrapper-height">
      <model-list @selectModelNode="selectModelNode" @addModelStatus="addModelStatus" :fromC="fromC"></model-list>
    </Col>
    <Col span="20" class="wrapper-height">
      <data-model-main :selectModelValue="selectModelValue"></data-model-main>
    </Col>
    <Modal v-model="showAddModel" title="选择数据源" class="select-connect-modal" @on-ok="openEditorModel">
      <select-data-connect @selectDataConnect="selectDataConnect"></select-data-connect>
    </Modal>
  </Row>
</template>

<script>
import ModelList from '@/components/modelList'
import DataModelMain from './components/dataModelMain'
import SelectDataConnect from './components/selectDataConnect'
export default {
  components: {
    ModelList,
    DataModelMain,
    SelectDataConnect
  },
  data () {
    return {
      selectModelValue: {},
      showAddConnect: false,
      showModelDetail: true,
      showAddModel: false,
      selectDataConnectArr: [],
      fromC: 1,  // 来自哪个父组件的引用 1.dataModel 2.dataReport 3.screenView
    }
  },
  methods: {

    selectModelNode(nodeData){
      this.selectModelValue = nodeData;
    },

    addModelStatus(data){
      this.showAddModel = data;
    },

    selectDataConnect(nodeArr){
      this.selectDataConnectArr = nodeArr;
    },

    openEditorModel(){
      if(this.selectDataConnectArr.length>0){
        this.$router.push({path: '/dataOrigin/editorModel'});
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
