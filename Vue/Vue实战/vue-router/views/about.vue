<template>
    <div>
        <h1>介绍页</h1>
        <button @click="handleRouter">跳转到user</button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleRouter (){
                this.$router.push('/user/123')
            }
        }

        /* 
            有时候, 跳转页面可能需要在 JavaScript 里进行, 类似于 window.location.href. 这时可以用第二种跳转方法
            使用 router 实例的方法. 比如在 about.vue 里, 通过点击事件跳转

            $router 还有其他一些方法:
                replace:    类似于 <router-link> 的 replace 功能, 他不会想 history 添加新记录.
                go:         类似于 window.history.go(), 在 history 记录中向前或者向后退多少步.
        */

    }
</script>
