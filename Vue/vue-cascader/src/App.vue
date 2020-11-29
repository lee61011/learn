<template>
  <div id="app">
    <!-- 获取用户选择的数据 -->
    <Cascader :options="options" v-model="value"></Cascader>
  </div>
</template>

<script>
import Cascader from './components/Cascader.vue';

export default {
  name: 'App',
  components: {
    Cascader,
  },
  data() {
    return {
      value: [],
      options: [
        {
          label: '肉类',
          children: [
            {
              label: '猪肉',
              children: [
                {
                  label: '五花肉',
                },
                {
                  label: '里脊肉',
                },
              ],
            },
          ],
        },
        {
          label: '水果类',
          children: [
            {
              label: '苹果',
              children: [
                {
                  label: '红富士',
                },
                {
                  label: '青苹果',
                },
              ],
            },
            {
              label: '葡萄',
              children: [
                {
                  label: '红葡萄',
                },
                {
                  label: '青葡萄',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus">

// #app

//   font-family Avenir, Helvetica, Arial, sans-serif

//   -webkit-font-smoothing antialiased

//   -moz-osx-font-smoothing grayscale

//   text-align center

//   color #2c3e50

//   margin-top 60px
</style>
