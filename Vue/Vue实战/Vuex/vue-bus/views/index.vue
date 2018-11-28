<template>
    <div>
    <!-- 使用 Counter 组件并监听来自 counter.vue 的自定义事件 -->

       随机增加:
       <Counter :number="number"></Counter>
    </div>
</template>

<script>
    import Counter from './counter.vue';

    export default {
       components: {
           Counter
       },
       data () {
           return {
               number: 0
           }
       },
       created () {
           this.$bus.on('add', num => {
               this.number += num;
           })
       }
    }
</script>
