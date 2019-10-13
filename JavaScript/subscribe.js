let _subscribe = (function () {
    //	Sub：发布订阅类
    class Sub {
        constructor() {
            //	创建一个事件池，用来存储后期需要执行的方法
            this.$pond = [];
        }
        /* 向事件池中追加方法（重复处理） */
        add(func) {
            let flag = this.$pond.some(item => {
                return item === func;
            });
            //	事件池中已经有了的就不再重复追加了
            !flag ? this.$pond.push(func) : null;
        }
        /* 从事件池中移除方法 */
        remove(func) {
            let $pond = this.$pond;
            for (let i = 0; i < $pond.length; i++) {
                let item = $pond[i];
                if (item === func) {
                    //	$pond.splice(i, 1);
                    //	直接这样操作会导致数组塌陷问题，我们不能真移除，只能把当前值赋值为 null，然后在 fire 执行方法中做判断
                    $pond[i] = null;
                    break;
                }
            }
        }

        /* 通知事件池中的方法，按照顺序依次执行 */
        fire(...args) {
            let $pond = this.$pond;
            for (let i = 0; i < $pond.length; i++) {
                let item = $pond[i];
                if (typeof item !== 'function') {
                    //	判断不是 function 的，此时再删除
                    $pond.splice(i, 1);
                    i--;
                    continue;
                };
                item.call(this, ...args);
            }
        }
    }

    //	暴露给外面使用
    return function subscribe() {
        return new Sub();
    }
})();

//	let s1 = new Sub();
let s1 = _subscribe();