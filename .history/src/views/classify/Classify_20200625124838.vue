<template>
  <!-- 商品分类 -->
  <div>
    <div class="classify1 m-t-10">商品分类</div>
    <div class="d-f">
        <van-tabs v-model="activeName">
  <van-tab title="营养奶品"  name="a">内容 1</van-tab>
  <van-tab title="中外名酒" name="b">内容 2</van-tab>
  <van-tab title="食品饮料" name="c">内容 3</van-tab>
   <van-tab title="个人护理" name="c">内容 3</van-tab>
</van-tabs>
       
         
        
         <div class="classify2">
        <van-tabs  v-model="active">
          <van-tab title="热带水果">
            内容 3
          </van-tab>
          <van-tab title="时令水果">内容 3</van-tab>
          <van-tab title="苹果/梨">内容 4</van-tab>
          <van-tab title="柑橘橙柚">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
       activeName: 'a',
       category: [],
       active: 2,
       bxMallSubDto:[],
       id:'',
        activeIndex:0,
        dataList:[],
    };
  },
  components: {},
  methods: {
    classify() {
      this.$router.push("/");
    },
    classification(){
      this.$api.classification(this.id).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
   this.category= JSON.parse(localStorage.getItem('categorys'));
   this.bxMallSubDto = this.category[0].bxMallSubDto;
   console.log(this.category);
     if(this.$route.query.index){
      this.activeIndex = this.$route.query.index
      this.id = this.category[this.activeIndex].bxMallSubDto[0].mallSubId
      this.classification()
    } else{
      this.id = this.category[0].bxMallSubDto[0].mallSubId
      this.classification()
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.classify1 {
  margin-left: 150px;
  font-size: 18px;
}
.classify2{
 margin-top: 6px;
 width: 300px;
}
</style>