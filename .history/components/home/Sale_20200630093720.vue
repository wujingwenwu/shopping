<template>
  <div>
    <div class="nav d-f j-c-c">
      <div class="f-c-ho m-t-15">热销产品</div>
    </div>
    <div class="d-f m-t-10 nav3">
      <div v-for="(item,index) in hotGoods" :key="index" class="d-f">
        <div class="nav2" @click="goDetail(index)">
          <img :src="item.image" alt class="nav1" />
          <div class="f-s-14 nav4">{{item.name}}</div>
          <div class="d-f m-l-20">
          <div class="d-f">
            <i class="iconfont icon-renminbi"></i>
            <div>{{item.price}}</div>
          </div>
          <div class="d-f nav5">
            <i class="iconfont icon-renminbi f-s-12 f-c-ho nav6"></i>
            <div class="f-s-12 f-c-ho nav6">{{item.mallPrice}}</div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id:''
    };
  },
  components: {},
  methods: {
    goDetail(index){
       this.$router.push({name:'Details',query:{id:this.hotGoods[index].goodsId}})
        this.$utils.goDetail(this.hotGoods[index])
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
}
.nav1 {
  width: 175px;
  height: 150px;
}
.nav2 {
  width: 185px;
  height: 200px;
  border: 1px solid #dbd7d7;
  border-right: none;
}
.nav3 {
  width: 100%;
  background: white;
  flex-wrap: wrap;
}
.nav4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 145px;
}
.nav6{
    text-decoration: line-through;
    color: red;
}
.nav5{
    margin-top: 3px;
    margin-left: 10px;
}
</style>