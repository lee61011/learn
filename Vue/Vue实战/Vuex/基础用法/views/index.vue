<template>
    <div>
        <h1>首页</h1>
        <!-- 
            直接将 Vuex 中保存的数据通过 $store.state.name 写在 template 里显得有点乱, 可以使用一个计算属性来显示
            {{ $store.state.count }} 
        -->
        {{ count }}
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-1</button>
        <br>
        <router-link to="/about">跳转到about</router-link>
    </div>
</template>

<script>
    export default {
        /* <router-link> 在 HTML5 的 History 模式下回拦截点击, 避免浏览器重新加载页面 */

        /* 
            router-link 除了 to 还有一些其他的 prop
                tag:    tag 可以指定渲染成什么标签, 比如 <router-link to="/about" tag="li"> 渲染的结果就是 <li> 而不是 <a>
                replace: 使用 replace 不会留下 History 记录, 所以导航后不能用后退键返回上一个页面
                active-class:   当 <router-link> 对应的路由匹配成功时, 会自动给当前元素设置一个名为 router-link-active 的 class.                
        */

       //   通过计算属性获取 Vuex 中保存的数据
       computed: {
           count () {
               return this.$store.state.count;
           }
       },

       methods: {
           //  提交 mutation 方法一:
           handleIncrement () {
               this.$store.commit('increment');
           },
           handleDecrease () {
               this.$store.commit('decrease');
           },


           //  提交 mutation 方法二:
           /* handleIncrement () {
               this.$store.commit({
                   type: 'increment',
                   count: 8
               })
           } */
       }

    }
</script>
