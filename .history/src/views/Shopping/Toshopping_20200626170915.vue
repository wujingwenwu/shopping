<template>
  <div>
    <div class="classify m-t-10">购物车</div>
    <div v-if="nickname === null">
      <div>
        <img src="../../../server/可能要用的图片/loading.gif" alt width="100%" />
      </div>
    </div>

    <div v-else>
      <div class="d-f">
        <van-button type="primary" @click="checkAll" class="toshopping">全选</van-button>
        <van-button type="info" @click="toggleAll" class="toshopping">反选</van-button>
      </div>
      <div>
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <van-checkbox
            name="a"
            class=" toshopping2"
            v-for="(item,index) in shopList"
            :key="index"
          >
          <div class="d-f">
            <div class="toshopping1">
              <img :src="item.image_path" alt width="80px" />
            </div>
            <div>
              <div class="f-s-14 f-c-ho">{{item.name}}</div>
              <div class="d-f">
               <div class="f-c-ho f-s-18">￥{{item.mallPrice}}</div>
              </div>
            </div>
            </div>
          </van-checkbox>
        </van-checkbox-group>
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
      result: [],
      nickname: "",
      shopList: []
    };
  },
  components: {},
  methods: {
    classify() {
      this.$router.push("/");
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  },
  mounted() {
    this.nickname = localStorage.getItem("nickname");
    this.$api
      .getCard()
      .then(res => {
        this.shopList = res.shopList;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.classify {
  margin-left: 150px;
  font-size: 18px;
}
.toshopping {
  margin-left: 20px;
}
.toshopping1 {
  width: 85px;
  height: 85px;
  border: 1px solid #d4cdcd;
}
.toshopping2 {
  padding: 10px;
  display: flex;
}
</style>