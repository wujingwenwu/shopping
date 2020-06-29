<template>
  <div>
  <div v-if="this.obj===null">
  <div class="d-f">您还没有收藏物品，请:<div @click="clickr">添加</div></div>
  </div>

  <div>
    <div class="d-f m-t-15">
      <div @click="clicks">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="city">我的收藏</div>
    </div>

    <div class="d-f m-t-20">
      <div class="collection m-l-20">
        <img :src="arr.image" alt width="80" />
      </div>
      <div>
        <div class="m-l-20">{{arr.name}}</div>
        <div class="d-f">
          <div class="f-c-ho m-l-20 m-t-20">￥{{arr.orl_price}}</div>
         
        </div>
      </div>
       <van-icon name="close" class=" collection1" @click="closes"/>
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
      arr: {},
      nickname:''
    };
  },
  components: {},
  methods: {
    clicks() {
      this.$router.push("/mine");
    },
    closes(){
      localStorage.removeItem("obj")
    },
    clickr(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("obj"));
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
  margin-top: 40px;
  margin-left: 30px;
}
</style>