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
        dimensionality: [],
        measurement: [],
        chartConfig: {
          type: ''
        },
        chartStyle: {
          nodeStyleForm: {
            width: 200,
            height: 200,
            zIndex: '1',
            top: 200,
            left: 200,
            backgroundColor: '#000',
            borderRadius: 0,
            boxShadow: false,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderWidth: '1',
            borderType: 'solid'
          },
          xForm: {
            showXAxis: true,
            xAxisTurn: false,
            xAxisBorderType: 'solid',
            xAxisBorderWidth: '1',
            xAxisBorderColor: '#d9d9d9',
            showLabelFont: true,
            labelFontTypt: 'sans-serif',
            labelFontSize: '12',
            labelFontColor: '#d9d9d9',
            textDirection: '0',
          },
          yForm: {
            showYAxis: true,
            yAxisTurn: false,
            yAxisBorderType: 'solid',
            yAxisBorderWidth: '1',
            yAxisBorderColor: '#d9d9d9',
            showLabelFont: true,
            labelFontTypt: 'sans-serif',
            labelFontSize: '12',
            labelFontColor: '#d9d9d9',
            textDirection: '0',
          },
          titleForm: {
            show: true,
            title: '未命名',
            color: '#fff',
            fontSize: 20,
            fontType: 'sans-serif',
            align: 'center'
          },
          plottingForm: {
            levelSplitLine: false,
            verticalSplitLine: false,
            lineColor: '#d9d9d9',
            lineType: 'solid',
            backgroundColor: '',
            borderColor: ''
          },
          legendForm: {
            show: true,
            fontColor: '#d9d9d9',
            fontSize: 12,
            fontType: 'sans-serif',
            direction: 'top'
          },
          chartStyleForm: {
            shape: 'more',
            direction: 'level'
          }
        }
      },
      123651221:{
        id: 123651221,
        chartId: 12365122121,
        type: 'table',
        icon: 'barchart',
        dimensionality: [],
        measurement: [],
        chartConfig: {
          type: ''
        },
        chartStyle: {
          nodeStyleForm: {
            width: 200,
            height: 200,
            zIndex: '1',
            top: 20,
            left: 20,
            backgroundColor: '#000',
            borderRadius: 0,
            boxShadow: false,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderWidth: '1',
            borderType: 'solid'
          },
          xForm: {
            showXAxis: true,
            xAxisTurn: false,
            xAxisBorderType: 'solid',
            xAxisBorderWidth: '1',
            xAxisBorderColor: '#d9d9d9',
            showLabelFont: true,
            labelFontTypt: 'sans-serif',
            labelFontSize: '12',
            labelFontColor: '#d9d9d9',
            textDirection: '0',
          },
          yForm: {
            showYAxis: true,
            yAxisTurn: false,
            yAxisBorderType: 'solid',
            yAxisBorderWidth: '1',
            yAxisBorderColor: '#d9d9d9',
            showLabelFont: true,
            labelFontTypt: 'sans-serif',
            labelFontSize: '12',
            labelFontColor: '#d9d9d9',
            textDirection: '0',
          },
          titleForm: {
            show: true,
            title: '未命名',
            color: '#fff',
            fontSize: 20,
            fontType: 'sans-serif',
            align: 'center'
          },
          plottingForm: {
            levelSplitLine: false,
            verticalSplitLine: false,
            lineColor: '#d9d9d9',
            lineType: 'solid',
            backgroundColor: '',
            borderColor: ''
          },
          legendForm: {
            show: true,
            fontColor: '#d9d9d9',
            fontSize: 12,
            fontType: 'sans-serif',
            direction: 'top'
          },
          chartStyleForm: {
            shape: 'more',
            direction: 'level'
          }
        }
      },
    },

    currentNode: null,   // 当前点击的元素

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
      console.log(value);
      state.nodeData = {
        ...state.nodeData,
        ...value
      }
      // 每次更新节点时，都更新当前选择的节点
      for(let key in value){
        state.currentNode = {
          ...value[key]
        };
      }
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
