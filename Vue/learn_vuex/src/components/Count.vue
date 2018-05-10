<template>
    <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{$store.state.count}} --- {{count}}</h3>
      <p>
        <!--  传值
        <button @click="$store.commit('add',10)">num++</button>
        <button @click="$store.commit('reduce')">num--</button>-->

        <!--  通过 mapMutations 映射方法
              1. 导入 mapMutations   import { mapState, mapMutations } from 'vuex';
              2. methods: mapMutations(['add', 'reduce']),-->
        <button @click="add(10)">num++</button>
        <button @click="reduce">num--</button>
      </p>

      <p>
        <button @click="addAction">addAction方法++</button>
        <button @click="reduceAction">reduceAction方法--</button>
      </p>
    </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

    export default {
      data(){
        return{
          msg: 'Hello Vuex'
        }
      },
      /*  通过计算属性简化插值表达式内容 方法一:
      computed: {
        count(){
          return this.$store.state.count;
        },
      },*/

      /*  通过计算属性简化插值表达式内容 方法二:
        * 首先 import { mapState } from 'vuex';
      computed: mapState({
        //  传入 state 输出 state.count
        count: state => state.count
      }),*/

      /*  通过计算属性简化插值表达式内容 方法三:  */
      computed: {
        ...mapState(['count']),         //  ES6 扩展运算符
//        count(){
//          return this.$store.getters.count;
//        }
        ...mapGetters(['count']),       //  简写
      },
      methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction','reduceAction'])
      },

      store,
    }
</script>

<style>

</style>
