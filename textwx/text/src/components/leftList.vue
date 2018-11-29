<template>
  <div class="list"  ref="wrapper" >
      <ul class="content" >
          <li  ref="lefttop" v-for="(item,index) in array" :key="item" :class="{'count':curCatId===index}" @click="selectLeft(index, $event)">{{item}}</li>
      </ul>
  </div>
</template>

<script>
/* eslint-disable */
import BScroll from 'better-scroll'
export default {
  name: 'home',
  data () {
     return {
       title: '组件标题',
       array:'',
       yhight:'22',
       scrollY:''
     }
   },
   props: {
        curCatId: Number 
   },
   watch: {
       curCatId:function(val, oldVal){
            let lefttop = this.$refs.lefttop;
            let el = lefttop[val];
            this.meunScroll.scrollToElement(el, 300);
       }
   },
   methods:{
        selectLeft (index, event) {
            if (!event._constructed) {
                return
            }
            this.$emit('leftbtn',index)
        },
        dataindex(){
            let array = new Array();
            for (let i = 0; i < 20; i++) {
                array.push("菜单"+ i)
            }
            this.$data.array = array;
        },
        scrollHeight(e){
        },
        _initScroll() {
        this.meunScroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: 3,
        });

       this.meunScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      }, 

   },
   computed:{

   },
   mounted (){
       this.dataindex();
   },
   created(){
        this.$nextTick(() => {
            this._initScroll()
        });
   },
   updated(){
    //    console.log(window)
   }


}
</script>
<style scoped>
.list{width:130px;height: calc(100vh - 200px);overflow: hidden;float: left;}
.list li {
    height: 40px;
    width: 100%;
    background-color: #b1b1b1;
    line-height: 40px;
    text-align: center;
}
.list li.count{
    background-color: #fff;
}
</style>
