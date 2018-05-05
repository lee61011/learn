<template>
    <div>
      <h2>{{ msg }}</h2>
      <!--  接受 :to 方式传递过来的参数  -->
      <h3>用户名: {{ $route.params.username }}</h3>
      <h3>用户id: {{ $route.params.id }}</h3>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          msg: "这是测试页面2"
        }
      }
    }
</script>

<style>

</style>
