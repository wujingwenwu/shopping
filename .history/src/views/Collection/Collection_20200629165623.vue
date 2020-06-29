<template>
  <div>
  <div v-if="this.arr===null">
  <div class="d-f">您还没有收藏物品，请:<div @click="clickr" class=" f-c-ho">添加</div></div>
  </div>

  <div v-else>
    <div class="d-f m-t-15">
      <div @click="clicks">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="city">我的收藏</div>
    </div>
  <div v-for="(item,index) in arr" :key="index">
    <div class="d-f m-t-20">
      <div class="collection m-l-20">
        <img :src="item.image" alt width="80" />
      </div>
      <div>
        <div class="m-l-20">{{item.name}}</div>
        <div class="d-f">
          <div class="f-c-ho m-l-20 m-t-20">￥{{item.orl_price}}</div>
         
        </div>
      </div>
       <van-icon name="close" class=" collection1" @click="closes"/>
    </div>
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
      arr: [],
      nickname:''
    };
  },
  components: {},
  methods: {
    clicks() {
      this.$router.push("/mine");
    },
    closes(){
      this.$api.cancelCollection(this.arr).then(res=>{
        localStorage.removeItem('obj')
        this.$router.push('/')
        this.$router.go(0)
         this.$toast('取消收藏成功')
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    clickr(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("collect"));
    console.log(this.arr);
    this.nickname=localStorage.getItem("nickname")
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  font-size: 18px;
  margin-left: 120px;
}
.icon-zuojiantou {
  font-size: 30px;
  margin-left: 10px;
}
.collection {
  width: 85px;
  height: 85px;
  border: 1px solid #d4d2d2;
}
.collection1 {
 position: absolute;
 right: 10px;
 margin-top: 40px;
}
</style>