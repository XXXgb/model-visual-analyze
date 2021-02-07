<template>
  <Row class="wrapper-height">
    <Col span="24" class="wrapper-height">
      <data-model-main :selectModelValue="selectModelValue"></data-model-main>
    </Col>
  </Row>
</template>

<script>
  import DataModelMain from '../dataModel/components/dataModelMain'
  export default {
    components: {
      DataModelMain,
    },
    data () {
      return {
        selectModelValue: {},
        showAddConnect: false,
        showModelDetail: true,
        showAddModel: false,
        selectDataConnectArr: [],
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
