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

       /* 
            使用 vue-bus 有两点需要注意:
                第一是 $bus.on 应该在 created 钩子内使用, 如果在 mounted 使用, 它可能接收不到其他组件来自 created 钩子内发出的事件;
                第二点是使用了 $bus.on, 在 beforeDestory 钩子里应该再使用 $bus.off 解除, 因为组件销毁后, 就没必要把监听的句柄储存在 vue-bus 里了,

            所以代码还应该适当的修改为:    
       */
       /* 
            //  修改前
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
       */

      //    修改后
      methods: {
          handleAddRandom (num) {
              this.number += num;
          }
      },
      data () {
          return {
              number: 0
          }
      },
      created () {
          this.$bus.on('add', this.handleAddRandom);
      },
      beforeDestroy() {
          this.$bus.on.off('add', this.handleAddRandom);
      },
    }
</script>
