<template>
  <div class="content">
      <div class="content-left">
        <div v-for="(item, index) in options" :key="index">
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right">
        <div v-for="(item, index) in lists" :key="index">
          <div class="label">{{ item.label }}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lists() {
      // 点击左边 算出右边
      return this.currentSelected && this.currentSelected.children;
    },
  },
  data() {
    return {
      currentSelected: null,
    };
  },
  methods: {
    select(item) {
        console.log(item)
      this.currentSelected = item; // 把当前左边选中的这一项存储起来
    },
  },
};
</script>

<style>

</style>
