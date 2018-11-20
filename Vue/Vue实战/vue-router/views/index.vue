<template>
    <div>
        <h1>首页</h1>
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
    }
</script>
