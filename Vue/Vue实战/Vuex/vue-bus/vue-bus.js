
/* 
    vue-bus 插件像 vue-router 和 Vuex 一样, 给 Vue 添加一个属性 $bus, 并代理 $emit、$on、$off 三个方法 
*/

const install = function (Vue) {
    const Bus = new Vue({
        methods: {
            //  这里的 ...args 是函数参数的解构. 
            //      因为不知道组件会传递多少个参数进来, 使用 ...args 可以把从当前参数到最后的参数都获取到
            emit (event, ...args) {
                this.$emit(event, ...args);
            },
            on (event, callback) {
                this.$on(event, callback);
            },
            off (event, callback) {
                this.$off(event, callback);
            }
        }
    });

    Vue.prototype.$bus = Bus;
};
export default install;

/* 
    vue-bus 的代码比较简单, 只有不到 20 行, 但它却解决了跨组件通信的问题, 
    而且通过插件的形式使用后, 所有组件都可以直接使用 $bus, 而无需每个组件都导入 bus 组件
*/