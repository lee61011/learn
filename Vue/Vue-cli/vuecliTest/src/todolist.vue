<template>
  <div>
    <input type="text" v-model="inpVal">
    <button @click="subData">提交</button>

    <ul>
      <!-- :key="index" 消除控制台警告 -->
      <todo-item
        v-for="( item, index ) in items"
        :key="index"
        :content="item"
        :index="index"
        @delete="delData"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
  //  导入 todoitem 组件
  import TodoItem  from "./components/todoitem"

  export default {
    //  使用 todoitem 组件
    components: {
      "todo-item": TodoItem,
    },
    data: function () {
      return {
        inpVal: "",
        items: [],
      };
    },
    methods: {
      subData: function () {
        this.items.push( this.inpVal );
        this.inpVal = "";
      },
      delData: function ( index ) {
        this.items.splice( index, 1 )
      }
    }
  }
</script>

<style scoped>

</style>
