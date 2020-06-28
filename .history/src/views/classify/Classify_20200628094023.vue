<template>
  <!-- 商品分类 -->
  <div>
    <div class="classify1 m-t-10">商品分类</div>
    <div class="d-f">
        
       
            <van-sidebar  v-model="activeKey" @click="actives(index)">
            <div   v-for="(item,index) in category"
          :key="index">
        <van-sidebar-item
          :title="item.mallCategoryName"
        /></div>
      </van-sidebar>
        
         <div class="classify2">
        <van-tabs  v-model="active" v-if="bxMallSubDto.length > 0" @click="activea(index)">
        <div  v-for="(item, index) in bxMallSubDto" :key="index">
          <van-tab :title="item.mallSubName">
               <van-swipe-cell>
            <div v-for="(item,index) in dataList" :key="index" @click="clicka(item)">
              <van-card
                :price="item.present_price"
                :origin-price="item.orl_price"
                :title="item.name"
                :thumb="item.image"
              />
            </div>
            <!-- <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template> -->
          </van-swipe-cell>

          </van-tab>
          </div>
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
       active: 0,
       bxMallSubDto:[],
       id:'',
        activeIndex:0,
        dataList:[],
        ids: ""
    };
  },
  components: {},
  methods: {
    classify() {
      this.$router.push("/");
    },
    classification(){
      this.$api.classification(this.id).then(res=>{
        this.dataList = res.dataList
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    actives(index){
         this.bxMallSubDto = this.categorys[this.activeKey].bxMallSubDto;
      this.active = 0;
      this.activeKey = index;
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.classification();
    },
    activea(index){
      this.active = index;
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.classification();
    },
     clicka(item) {
      this.$router.push({ path: "/details", query: { id: item.id } });
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