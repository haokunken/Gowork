<template>
  <div class="home"></div>
</template>

<script scoped>
/* eslint-disable */
import HelloWorld from "@/components/HelloWorld.vue";
import leftList from "@/components/leftList.vue";
import leftright from "@/components/leftright.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    leftList,
    leftright
  },
  data() {
    return {
      curCatId: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
