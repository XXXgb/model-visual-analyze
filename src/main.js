// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './style/iconfont/iconfont.css';
import store from './vuex';
import VueQuillEditor from 'vue-quill-editor';
import echarts from 'echarts';


Vue.use(ViewUI);
Vue.use(VueQuillEditor);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store

})
