<template>
  <div class="cascader">
    <div class="title" @click="toggle"></div>
    <div class="content" v-if="isVisible">
      显示的内容
    </div>
  </div>
</template>

<script>
export default {
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
