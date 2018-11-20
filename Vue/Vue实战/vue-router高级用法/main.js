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
const router = new VueRouter(RouterConfig);
/* 
    如果要修改网页标题, 可以通过 mounted 钩子修改. 但是页面多了维护起来会很麻烦, 而且这些逻辑都是重复的
    比较理想的一个思路是 在页面发生路由改变时, 统一设置
    vue-router 提供了导航钩子 beforeEach 和 afterEach, 他们会在路由即将改变前和改变后触发, 所以设置标题可以设置在 beforeEach 钩子完成

    导航钩子有三个参数:
        to:     即将要进入的目标的路由对象
        from:   当前导航即将要离开的路由对象
        next:   调用该方法后, 才能进入下一个钩子
*/
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

/* 
    如果一个比较长的页面滚动到某个位置跳转到另一个页面, 滚动条默认是在上一个页面停留的地方, 
    如果想让滚动条能返回顶端, 通过钩子 afterEach 就可以实现
*/
/* router.afterEach((to, from, next) => {
    window.scrollTo(0,0);
}) */

/* 
    某些页面需要校验是否登录, 没登录的跳转到登录页面
*/
router.beforeEach((to, from, next) => {
    if (window.localStorage.getItem('token')) {
        next();
    } else {
        next('/login');
    }
})


//  创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});