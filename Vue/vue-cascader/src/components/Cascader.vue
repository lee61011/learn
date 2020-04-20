<template>
  <div class="cascader" v-click-outside="close"><!--vue 的指令都要以 v- 开头，如果点击的是元素外面的区域，调用 close 方法-->
    <div class="title" @click="toggle">
      {{ result }}
    </div>
    <div class="content" v-if="isVisible">
      <CascaderItem :options="options" :value="value" :level="0" @change="change"></CascaderItem>
    </div>
  </div>
</template>

<script>
/* 需求：点击输入框显示下拉框，点击页面其他地方关闭下拉框 */
// 方法一
// 可以在全局上挂个事件，当点击的时候校验一下点击的是否是cascader中的内容
// 判断当前点击的是否在某个元素
import util from '../directives/clickOutside';
import CascaderItem from './CascaderItem.vue';

export default {
  components: {
    CascaderItem,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  // 方法二
  // 如果希望对某个元素拥有一系列的操作 可以封装一个指令(自定义指令)
  // click-outside: 在需要使用的地方使用 v-xxxxxxx 来使用
  directives: {
    clickOutside: util.clickOutside,
  },
  computed: {
    result() {
      this.value.map(item => item.label).join('/');
    }
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    change(value) {
      this.$emit('input', value)
    },
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
  .cascader
    display inline-block
  .title
    width 150px;
    height 30px;
    line-height 30px
    border 1px solid #ccc;
  .content
    display flex
  .content-left
    border: 1px solid #cccccc
    min-height 150px
  .label
    width 80px
    padding-left 5px
  .label:hover
    background: #999999
    cursor pointer
</style>
