<template>
  <div id="app">
    <Cascader :potions="options"></Cascader>
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
