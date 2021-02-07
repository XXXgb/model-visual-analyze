import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
  //引用vuex-persistedstate对state数据持久化
  /*plugins: [
    persistedState({ storage: window.sessionStorage })
  ],*/

  // this.$store.state.val
  state: {

    choice: {name: '首页', pathName: 'DutySituation', key: 0},

    zoomValue: 100,

    editorReportStatus: false,

    dragNodeType: {
      type: '',
      status: false
    },  // 维度度量拖拽节点的类型

    nodeData: {
      1279379213:{
        id: 1279379213,
        chartId: 127937921321,
        type: 'table',
        icon: 'barchart',
        width: 200,
        height: 200,
        zIndex: '1',
        top: 20,
        left: 20,
        backgroundColor: '#fff',
        dimensionality: [],
        measurement: [],
        chartConfig: {
          type: ''
        }
      },
      123651221:{
        id: 123651221,
        chartId: 12365122121,
        type: 'table',
        icon: 'barchart',
        width: 200,
        height: 200,
        zIndex: '1',
        top: 100,
        left: 100,
        backgroundColor: '#fff',
        dimensionality: [],
        measurement: [],
        chartConfig: {
          type: ''
        }
      },
    },

    currentNode: {
      id: 1279379213,
      chartId: 127937921321,
      type: 'table',
      icon: 'barchart',
      style: {
        width: 200,
        height: 200,
        zIndex: '1',
        top: 20,
        left: 20,
      },
      dimensionality: [],
      measurement: [],
      chartConfig: {
        type: ''
      }
    },   // 当前点击的元素

    hoverCurrentNode: null   // 当前鼠标滑过的元素


  },

  mutations: {

    changeZoom(state, value){
      state.zoomValue = value;
    },

    changeReportEditStatus(state, value){
      state.editorReportStatus = value;
    },

    changeDragNodeType(state, value){
      state.dragNodeType = value;
    },

    updateNode(state,value){
      state.nodeData = {
        ...state.nodeData,
        ...value
      }
      // 每次更新节点时，都更新当前选择的节点
      state.currentNode = {
        ...state.currentNode,
        ...value
      };
    },

    addNode(state,value){
      state.nodeData = {
        ...state.nodeData,
        ...value
      }
    },

    deleteNode(state,value){
      delete state.nodeData[value];
    },

    updateCurrentNode(state,value){
      state.currentNode = value;
    },

    updateHoverCurrentNode(state,value){
      state.hoverCurrentNode = value;
    },



  },

  /*  actions: {
      upDateInfoFun (context, data) {
        context.commit('upDateInfo', data)
      }
    }*/

});

export default store
