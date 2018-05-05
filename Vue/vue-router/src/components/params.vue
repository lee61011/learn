<template>
    <div>
      <h2>{{ msg }}</h2>
      <p>newsId: {{ $route.params.newsId }}</p>
      <p>newsTatle: {{ $route.params.newsTitle }}</p>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          msg: "Params Page"
        }
      },
      /*  写在模板中的钩子函数  */
      beforeRouteEnter: (to, from, next) => {
        console.log("准备进入路有模板");
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
      }
    }
</script>

<style>

</style>
