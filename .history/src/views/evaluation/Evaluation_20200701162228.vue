<template>
  <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div class="evaluation"></div>
    <div v-for="(item,index) in arr.order_list" :key="index">
      <div class="d-f">
        <img :src="item.image_path" alt width="80" />
        <div class="m-l-10">
        <div>商品评分</div>
          <van-rate class="m-t-10"
            v-model="value"
            icon="like"
            void-icon="star"
            :size="20"
            color="#ee0a24"
            void-color="#eee"
          />
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
      arr: {},
      value: 3
    };
  },
  components: {},
  methods: {
    whole() {
      this.$router.push("/whole");
    }
  },
  mounted() {
    this.arr = this.$route.query.item;
    console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.whole {
  margin-left: 120px;
}
.evaluation{
    width: 100%;
    height: 1px;
    background: #c7c4c4;
}
</style>