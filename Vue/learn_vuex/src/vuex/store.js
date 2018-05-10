/**
 * Created by lee61011 on 2018/5/2.
 */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/*  state 保存状态对象  */
const state = {
  count: 1,
};

/*  mutations 改变状态对象  */
const mutations = {
  add(state,n){
    state.count += n;
  },
  reduce(state){
    state.count --;
  }
}

/*  getters 计算过滤操作  */
const getters = {
  count: function (state) {
    return state.count += 100;
  }
}

/*  actions 异步修改状态; mutations 是同步修改状态  */
const actions = {
  //  actions 可以调用 mutations 里面的状态
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('reduce')},3000);
    console.log("我比上面这行代码先执行,说明这是异步方法;")
  },
  reduceAction({commit}){
    commit('reduce');
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
