import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',    //  默认 hash  设置为 history 模式 url 显示会更友好
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      /*
      * redirect 和 alias 的区别:
      *   redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
      *   alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。
       */
    },{
      path: '/Test',
      //  name: 'test',               若有子路由的话 这里的 name 就不起作用了
      component: Test,
      children: [
        {path: '/', name: '/test', component: Test},
        {path: 'Test1', name: '/test/test1', component: Test1},
        {path: 'Test2', name: 'test2', component: Test2},
      ],
      alias: '/goTest'            //  使用 alias 实现路由重定向
    },{
      path: '/params/:newsId(\\d+)/:newsTitle',     //  通过正则 id 值只能传递数字
      component: Params,

      /*  路由配置文件中的钩子函数
        * 在路由文件中我们只能写一个 beforeEnter 就是在进入此路由配置时
        * 钩子函数还可以写在模板中   params.vue*/
      beforeEnter: (to,from,next) => {
        console.log("我进入了 params 模板");
        console.log(to),
        console.log(from),
        //  next( false )         //  表示不跳转
        //  next( true )          //  跳转
        //  next( {path: '/'} )   //  跳转到根路径
        next()                    //  next() 必须要写上, 否则页面不会跳转
      }
    },
    /*  路由重定向  */
    {
      path: '/goHome',
      redirect: '/',            //  redirect 基本重定向
    },{
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle',           //  重定向时传递参数
    },{
      path: '*',                //  设置 404 页面, 将 path 设置为 *
      component: Error
    }
  ]

  /*  单页面多路由区域操作  */
  /*routes: [
    {
      path: '/',
      components: {
        default: Test,
        left: Test1,
        right: Test2
      }
    },{
      path: '/test',
      components: {
        default: Test,
        left: Test2,
        right: Test1,
      }
    }

  ]*/
})
