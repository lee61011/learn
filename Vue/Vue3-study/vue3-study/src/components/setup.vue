<template>
    <div>
        <h2>Setup.vue 页面</h2>
    </div>
</template>

<script>
import {} from "@vue/composition-api"

export default {
    setup() {
        //  setup 函数会在 beforeCreate 之后、created 之前执行
        console.log("setup");
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
}
</script>