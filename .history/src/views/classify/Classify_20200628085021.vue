<template>
  <!-- 商品分类 -->
  <div>
    <div class="classify1 m-t-10">商品分类</div>
    <div class="d-f">
        
       
            <van-sidebar  v-model="activeKey" @click="actives(index)">
        <van-sidebar-item
          v-for="(item,index) in category"
          :key="index"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
        
         <div class="classify2">
        <van-tabs  v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab v-for="(item, index) in bxMallSubDto" :key="index" :title="item.mallSubName">
            <template>
            <div class="m-l-10">
              <div class="r-box1" v-for="(item,index) in dataList" :key="index">
                <div class="d-f"><img :src="item.image" alt="" width="80px">
                <div>
                  <div class="f-c-ho">{{item.name}}</div>
                  <div class="d-f m-t-10">
                    <div class="f-c-ho">¥{{item.present_price}}</div>
                    <div class="m-l-10 t-d-l-t">{{item.orl_price}}</div>
                  </div>
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
      this.getdata();
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