<template>
  <div class="home">
    <div class="top_box">
      <img src="../images/123.png" alt="123">
    </div>
    <div class="min">
      <leftList :curCatId="curCatId"  @leftbtn="leftbtn"></leftList>
      <leftright ref="child" @upParamsFun="fillValFun"></leftright>
    </div>
  </div>
</template>

<script scoped>
/* eslint-disable */
import HelloWorld from '@/components/HelloWorld.vue'
import leftList from '@/components/leftList.vue'
import leftright from '@/components/leftright.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    leftList,
    leftright
  },
  data () {
        return {
            curCatId:0
        }
   },
  methods:{
    fillValFun(curCatId){
      this.$data.curCatId = curCatId
    },
    leftbtn(index){
      this.$refs.child.childFn(index)
    }
  }
  
}
</script>
<style>
.top_box{
  width: 100%;
  height: 200px;
}
.top_box img{
  width: 100%;
  height: 200px;
}
.min{
  display: flex;
}
</style>
