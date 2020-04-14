<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle"></div>
    <div class="content" v-if="isVisible">
      显示的内容
    </div>
  </div>
</template>

<script>
/* 需求：点击输入框显示下拉框，点击页面其他地方关闭下拉框 */
// 可以在全局上挂个事件，当点击的时候校验一下点击的是否是cascader中的内容
// 判断当前点击的是否在某个元素
export default {
  // 如果希望对某个元素拥有一系列的操作 可以封装一个指令(自定义指令)
  // click-outside: 在需要使用的地方使用 v-xxxxxxx 来使用
  directives: {
    // 指令是一个方法  指令有自己的声明周期
    // clickOutside() {} // 这种写法会在指令被绑定(bind)时和指令数据变化(update)时被触发  [默认监听这两个事件]
    /* 如果只想监听一个事件,可以按照下面的方法来写 */
    clickOutside: {
      inserted // 监听div插入时触发
    }
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="stylus">
  .title
    width 150px;
    height 30px;
    border 1px solid #ccc;
</style>
