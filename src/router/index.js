import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Index from '@/pages/index/index'
// import DataOrigin from '@/pages/dataOrigin/dataOrigin'
const Index = (resolve) => {
  import ('@/pages/index/index').then((module)=>{resolve(module)})
};

const DataOrigin = (resolve) => {
  import ('@/pages/dataOrigin/dataOrigin').then((module)=>{resolve(module)})
};

const DataModel = (resolve) => {
  import ('@/pages/dataOrigin/dataModel/dataModel').then((module)=>{resolve(module)})
};

const EditorModel = (resolve) => {
  import ('@/pages/dataOrigin/editorModel/editorModel').then((module)=>{resolve(module)})
};

const DataReport = (resolve) => {
  import ('@/pages/dataReport/dataReport').then((module)=>{resolve(module)})
};

const EditorReport = (resolve) => {
  import ('@/pages/dataReport/editorReport').then((module)=>{resolve(module)})
};

const ScreenView = (resolve) => {
  import ('@/pages/dataScreen/screenView').then((module)=>{resolve(module)})
};



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/dataOrigin/dataModel',
      children:[
        {
          path: 'dataOrigin',
          component: DataOrigin,
          name: 'dataOrigin',  // 数据源
          redirect: '',
          children:[
            {path: 'dataModel', component: DataModel, name: 'dataModel'},
          ]
        },
        {
          path: 'dataReport',
          component: DataReport,
          name: 'dataReport',  // 报告
          redirect: ''
        },
        {
          path: 'editorReport',
          component: EditorReport,
          name: 'editorReport',  // 编辑报告
          redirect: '',
        },
        {
          path: 'screenView',
          component: ScreenView,
          name: 'screenView',  // 数据大屏
          redirect: '',
        }
      ]
    }
  ]
})
