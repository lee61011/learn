export default {
  // directives 表示自定义指令只在当前组件内生效，如果自定义指令注册在全局上，那么所有组件内都生效
  // 指令是一个方法  指令有自己的声明周期
  // clickOutside() {} // 这种写法会在指令被绑定(bind)时和指令数据变化(update)时被触发  [默认监听这两个事件]
  /* 如果只想监听一个事件,可以按照下面的方法来写 */
  clickOutside: {
    // inserted 表示监听div插入时触发; 参考：https://cn.vuejs.org/v2/guide/custom-directive.html
    inserted(el, bindings, vnode) { // el 代表真实的 dom 元素
      console.log(el, bindings, vnode);
      document.addEventListener('click', (e) => {
        if (e.target === el || el.contains(e.target)) { // contains 表示包含
          return;
        }
        bindings.value(); // close 事件
      }, false);
    },
    // unbind() { // 在指令卸载的时候 执行此操作 移出事件监听
    //   // document.removeEventListener('click', listener)
    // },
  },
};
