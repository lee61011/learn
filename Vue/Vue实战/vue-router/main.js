//  导入 Vue 框架
import Vue from 'vue';
import VueRouter from 'vue-router';
//  导入 app.vue 组件
import App from './app.vue';


Vue.use(VueRouter);

const Routers = [
    {
        //  path 属性是指定当前匹配的路径
        path: '/index',
        //  component 是映射的组件
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    /* 路由列表的 path 是可以带参数的 */
    {
        path: '/user/:id',
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        //  当访问路径不存在时, 重定向到首页   
        path: '*',
        redirect: '/index'
    }
    



    /* 
        上面的写法, webpace 会把每一个路由都打包为一个 js 文件, 在请求到该页面的时候, 才会去加载这个页面的 js,
        也就是按需加载. 这样的好处是不需要再打开首页的时候就把所有的页面内容全部加载进来, 只有在访问时才加载.

        如果非要一次性加载, 可以这样写
    */
   /* {
       path: '/index',
       component: require('./views/index.vue')
   } */
];

const RouterConfig = {
    //  使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers

    //  在 package.json 文件的 dev 配置项中  --open 后面  增加 --history-api-fallback  所有的路由都会指向 index.html
};
const router = new VueRouter(RouterConfig)


//  创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});