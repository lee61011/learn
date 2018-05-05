<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!--  编程式导航  -->
      <button @click="goBack">后退</button>
      <button @click="goNext">前进</button>
      <button @click="goHome">返回首页</button>

      <br><br>

      <router-link to="/">首页</router-link>
      <router-link to="/test">测试页面</router-link>
      <router-link to="/params/110/新闻标题">路由传值页面</router-link>

      <!--<router-link to="/test/test1">测试页面1</router-link>-->
      <!--  路由传值方式2: 通过 :to 方式传递  name 值必须与路由配制里面的 name 值一样  -->
      <!--<router-link :to="{name: 'test2', params:{username: '张三', id: 'ZhangSan'}}">测试页面2</router-link>-->
    </div>
    <!--  路由传值方式1: 通过路由配置里面的 name 属性传值  ( 不常用 )  -->
    <!--<p>{{ $route.name }}</p>-->

    <p>
      <!--  使用 redirect 实现路由重定向  -->
      使用 redirect 实现路由重定向:
      <router-link to="/">goHome</router-link>
      <router-link to="/params/120/新闻详情">goParams</router-link>
    </p>
    <p>
      <!--  使用 alias 实现路由重定向  -->
      使用 alias 实现路由重定向:
      <router-link to="/goTest">goTest</router-link>
    </p>

    <p>
      <!--  404 页面处理  -->
      404 页面处理
      <router-link to="/119">404 页面</router-link>
    </p>


    <!--过渡模式mode：
          in-out:新元素先进入过渡，完成之后当前元素过渡离开。
          out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。
    -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>


    <!--  单页面多路由区域操作  -->
    <!--<router-view
      name="left"
      style="float: left; width: 50%; height: 200px; background-color: #ccc;"
    ></router-view>
    <router-view
      name="right"
      style="float: right; width: 50%; height: 200px; background-color: #888;"
    ></router-view>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
