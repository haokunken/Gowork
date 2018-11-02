<template>
  <div class="list" ref="wrapper" >
      <div ref="wrappers">
      <ul  class="content" v-for="items in arrays"  ref="righttop" :key="items.ids" >
          <p class="text_tit">{{items.titname}}</p>
          <li v-for="items_ in items.lists" :key="items_">{{items_}}</li>
      </ul>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
import BScroll from 'better-scroll'

export default {
      data () {
        return {
            title: '组件标题',
            arrays:"",
            scrollY:'',
            objs:'',
            heightheight:'',
            curCatId:0
        }
   },
   methods:{
        dataindex(){
            let boxs = new Array()
            let lists = [];
            for (let j = 0; j < 20; j++) {
                let objs = new Object()
                objs.titname = "标题"+ j
                objs.ids = j
                objs.lists = []
                let m = 3 //最小值
                let n = 30 //最大值
                var num = Math.floor(Math.random()*(m - n) + n);
                for (let i = 0; i < num; i++) {
                    objs.lists.push("单品"+ j+i)
                }
                boxs.push(objs)
            }
            this.$data.arrays = boxs;
        },
        Calculation(){
            let data =  this.$data.arrays
            let height = 0;
            let heightheight = []
            for (let i = 0; i < data.length; i++) {
                const element = data[i].lists.length;
                height += parseInt((element * 40) + 30)
                heightheight.push(height)
            }
            this.$data.heightheight = heightheight
        },
        scrollHeight(e){
            
        },
        _initScroll() {
            this.meunScroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: 3
            });

            this.meunScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
                let curCatId = this.$data.curCatId
                if(this.scrollY == 0){
                    this.$data.curCatId = 0
                    this.$emit('upParamsFun',this.$data.curCatId)
                }
                for (var i = 0; i < this.$data.heightheight.length; i++) {
                    if (this.scrollY >= this.$data.heightheight[i] && this.scrollY < this.$data.heightheight[i + 1]) {
                    this.$data.curCatId = i + 1
                    this.$emit('upParamsFun',this.$data.curCatId)
                    break
                    }
                }
            });
      }, 
        childFn(index){
            let rightItem = this.$refs.righttop
            let el = rightItem[index]
            this.meunScroll.scrollToElement(el, 300);
        },

   },
    mounted (){
       this.dataindex();
       this.Calculation();
    },
   created(){
        this.$nextTick(() => {
            this._initScroll()
        });
   },
}
</script>
<style scoped>
.list{width:100%;height: calc(100vh - 200px);overflow: hidden;float: left;}
.list li {
    height: 40px;
    width: 100%;
    background-color: #c9c9c9;
    line-height: 40px;
    text-align: center;
}
.text_tit{
    height: 30px;
    text-align: center;
    line-height: 30px;
}
</style>
