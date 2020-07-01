<template>
  <!-- 轮播图 -->
  <div class="itema">
  
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in slides" :key="index">
          <img v-lazy="item.image" width="100%" height="200px" @click="goDetail(item,index)"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="d-f rotation j-c-c">
      <div v-for="(item,index) in category" :key="index">
        <div class="m-t-10">
          <img :src="item.image" alt class="item" @click="clickItems(item,index)"/>
          <div class="f-s-14 m-l-10 title1">{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
   
   goDetail(item,index){
     this.$router.push({name:'Details',query:{id:this.slides[index].goodsId}})
     this.$utils.goDetail(this.list[index])
   },
   clickItems(item,index){
     this.$router.push({name:'Classify',query:{index:index}})
   } 
    
  },
  mounted() {},
  watch: {},
  computed: {
    slides() {
      return this.$store.state.slides;
    },
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.rotation {
  width: 350px;
  height: 100px;
  background: white;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 10px;
}
.item {
  width: 50px;
  padding: 0px 10px;
}
.itema{
  margin-top: 55px;
}
</style>