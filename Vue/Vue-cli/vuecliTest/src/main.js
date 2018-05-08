// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import todolist from './todolist'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { todolist },         //  todolist 组件
  template: '<todolist/>'           //  在页面显示 todolist 组件
})
