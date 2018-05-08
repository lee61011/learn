<template>
  <li @click="delData">{{content}}</li>
</template>

<script>
  export default {
    //  父组件使用 :content="item" :index="index" 传递 item 和 index   子组件使用 props 来接收数据
    props: ['content','index'],
    methods: {
      delData: function () {
        this.$emit( 'delete', this.index );
      }
    }
  }
</script>

<style scoped>

</style>
