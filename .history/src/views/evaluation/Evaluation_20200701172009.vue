<template>
  <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div class="evaluation m-t-10"></div>
    <div v-for="(item,index) in arr.order_list" :key="index">
      <div class="d-f m-t-10 evaluation1">
        <img :src="item.image_path" alt width="80" />
        <div class="m-l-10">
          <div>商品评分</div>
          <van-rate
            class="m-t-10"
            v-model="value"
            icon="like"
            void-icon="star"
            :size="20"
            color="#ee0a24"
            void-color="#eee"
          />
        </div>
      </div>
      <div>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
      </div>
      <van-checkbox v-model="checked">复选框</van-checkbox>
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
      value: 0,
      message: "",
      checked: true,
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
    // this.$api
    //   .goodsOne({
    //     id: this.arr.order_list.cid,
    //     rate:this.value,
    //     content:this.message,
    //     anonymous,
    //     _id :this.,
    //     order_id,
    //     image
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.whole {
  margin-left: 120px;
}
.evaluation {
  width: 100%;
  height: 1px;
  background: #c7c4c4;
}
.evaluation1 {
  background: rgb(0, 174, 255);
}
</style>