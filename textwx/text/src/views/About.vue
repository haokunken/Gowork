<template>
  <div class="about">
    <h1 @click="text1">{{text}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "关于我ddd们"
    };
  },
  mounted() {
    this.text1();
  },
  methods: {
    text1() {
      this.text = "12113";
    }
  }
};
</script>

<style scoped>
.pay {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: #fc3e1c;
  text-align: center;
  color: #fff;
  margin: 80px auto 0;
}
</style>
