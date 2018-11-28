//  导入 Vue 框架
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
//  导入 app.vue 组件
import App from './app.vue';

import VueBus from './vue-bus';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);

const Routers = [
    {
        //  path 属性是指定当前匹配的路径
        path: '/index',
        //  component 是映射的组件
        meta: {
            title:  '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    /* 路由列表的 path 是可以带参数的 */
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        //  当访问路径不存在时, 重定向到首页   
        path: '*',
        redirect: '/index'
    }
];

const RouterConfig = {
    //  使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers

    //  在 package.json 文件的 dev 配置项中  --open 后面  增加 --history-api-fallback  所有的路由都会指向 index.html
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})


const store = new Vuex.Store({
    //  Vuex 的配置
    //  Vuex 还有其他 3 个选项可以使用: getters  actions  modules
    state: {
        //  使用 Vuex  定义一个数据 list, 如果只想得到小于 10 的数据, 可以在组件的计算属性里进行过滤
        //  在 index.vue 文件中进行修改
        list: [1, 5, 8, 10, 30, 50],
        count: 0
    },
    getters: {
        filteredList: state => {
            return state.list.filter(item => item < 10)
        },
        //  getter 也可以依赖其他的 getter, 把 getter 作为第二个参数.
        //  比如再写一个 getter, 计算出 list 过滤后的就果的数量
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }
    },

    /* 
        mutation 里不应该异步操作数据, 所以有了 actions 选项
        action 与 mutation 很像, 不同的是 action 里面提交的是 mutation, 并且可以异步操作业务逻辑

        action 在组件内通过 $store.dispatch 触发, 例如使用 action 来加 1.
    */
   mutations: {
        increment (state, n = 1) {
            state.count += n;
        }
   },
   actions: {
       /* increment (context) {
           context.commit('increment');
       } */

       //   使用异步方法在 1s 后提交 mutation
       asyncIncrement (context) {
           return new Promise(resolve => {
               setTimeout(() => {
                   context.commit('increment');
                   resolve();
               }, 1000);
           })
       }
   }
});



//  创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    //  使用 vuex
    store: store,
    render: h => {
        return h(App)
    }
});