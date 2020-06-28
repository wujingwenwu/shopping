<template>
  <!-- 商品分类 -->
  <div>
    <div class="classify1 m-t-10">商品分类</div>
    <div class="d-f">
        
       
          <van-sidebar v-model="activeKey">
          <van-sidebar-item title="新鲜水果"/>
            <van-sidebar-item title="中外名酒" />
            <van-sidebar-item title="营养奶品" />
            <van-sidebar-item title="食品饮料" />
            <van-sidebar-item title="个人护理" />
          </van-sidebar>
        
         <div class="classify2">
        <van-tabs  v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab v-for="(item, index) in bxMallSubDto" :key="index" :title="item.mallSubName">
            <template>
            <div>
              <div class="r-box1" v-for="(item,index) in dataList" :key="index">
                <div class="r-box2"><img :src="item.image" alt="" width="80px"></div>
                <div>
                  <div class="rbox2-font">{{item.name}}</div>
                  <div class="r-box3">
                    <div class="rbox2-font1">¥{{item.present_price}}</div>
                    <div class="rbox3-font">{{item.orl_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            </template>
          </van-tab>
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
      activeKey: 0,
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