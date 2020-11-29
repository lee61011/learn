<template>
  <div class="content">
      <div class="content-left">
        <div v-for="(item, index) in options" :key="index">
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists && lists.length">
        <CascaderItem :options="lists" :level="level+1" @change="change" :value="value"></CascaderItem>
      </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'CascaderItem', // 递归组件的特点-必须要给当前组件取个名字
  props: {
    level: {
      type: Number,
    },
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lists() {
      // 点击左边 算出右边
      // return this.currentSelected && this.currentSelected.children;
      // computed 的缓存问题 (computed 是基于 watch+缓存实现的)
      return this.value[this.level] && this.value[this.level].children
    },
  },
  data() {
    return {
      currentSelected: null,
    };
  },
  methods: {
    change(item) {
      this.$emit('change', item)
    },
    select(item) { // 每次修改的时候 需要向父组件发送事件 通知父组件修改数据
      this.currentSelected = item // 把当前左边选中的这一项存储起来
      // 把数据拷贝一份 将数据改好后提交给父组件
      let cloneValue = cloneDeep(this.value) // 把父组件传递的数据拷贝
      cloneValue[this.level] = item
      cloneValue.splice(this.level + 1) // 当前点击某一项 就将自己的后面+1的所有项都删除调
      this.$emit('change', cloneValue)
      console.log(item)
    },
  },
};
</script>

<style>

</style>
