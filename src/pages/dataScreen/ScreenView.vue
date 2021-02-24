<template>
  <Row class="screen-view-wrapper wrapper-height">
    <Col span="4" class="wrapper-height">
      <model-list @selectModelNode="selectModelNode" @addScreenStatus="addScreenStatus" :fromC="fromC"></model-list>
    </Col>
    <Col span="20" class="wrapper-height">
      <screen-view-main></screen-view-main>
    </Col>
    <Drawer class="add-screen-drawer" title="Basic Drawer" :closable="false" v-model="showAddScreen" width="100%">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </Row>
</template>

<script>

  import ModelList from '@/components/modelList'
  import ScreenViewMain from './components/screenViewMain'
export default {
  components: {
    ModelList,
    ScreenViewMain
  },
  data () {
    return {
      fromC: 3,  // 来自哪个父组件的引用 1.dataModel 2.dataReport 3.screenView
      selectModelValue: '',
      showAddScreen: false,
    }
  },
  watch: {

  },
  methods: {
    selectModelNode(nodeData){
      this.selectModelValue = nodeData;
    },

    addScreenStatus(data){
      this.showAddScreen = data;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.screen-view-wrapper{


}
</style>
