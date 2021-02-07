<template>
  <Row class="data-report-wrapper wrapper-height">
    <Col span="4" class="wrapper-height">
      <model-list @selectModelNode="selectModelNode" @addReportStatus="addReportStatus" :fromC="fromC"></model-list>
    </Col>
    <Col span="20" class="wrapper-height">
      <data-report-main></data-report-main>
    </Col>
    <Modal v-model="showAddReport" title="选择数据连接" class="select-connect-modal" @on-ok="openEditorModel">
      <select-data-origin @selectDataOrigin="selectDataOrigin"></select-data-origin>
    </Modal>
  </Row>
</template>

<script>
  import DataReportMain from './components/dataReportMain'
  import ModelList from '@/components/modelList'
  import SelectDataOrigin from './components/selectDataOrigin'
export default {
  components: {
    ModelList,
    DataReportMain,
    SelectDataOrigin
  },
  data () {
    return {
      fromC: 2,  // 来自哪个父组件的引用 1.dataModel 2.dataReport
      showAddReport: false,
    }
  },
  watch: {

  },
  computed:{
    showType:{
      get(){
        return this.$store.state.editorReportStatus
      },
      set(){}
    }
  },
  methods: {
    selectModelNode(nodeData){
      this.selectModelValue = nodeData;
    },

    addReportStatus(data){
      this.showAddReport = data;
    },

    selectDataOrigin(nodeArr){
      this.selectDataConnectArr = nodeArr;
    },

    openEditorModel(){
      if(this.selectDataConnectArr.length>0){
        this.$router.push({path: '/editorReport'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.data-report-wrapper{

}
</style>
