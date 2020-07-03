<template>
<div>
  <div class="f-d-c m-t-30 titles2">
    <div class="d-f j-c-c m-t-10 titles">
      <div class="item d-f j-c-c a-i-c">2F</div> 
      <div class="f-c-ho">新鲜水果</div>
    </div>
    <div>
      <div v-for="(item,index) in floor2" :key="index">
        <div :class="[{'left':(index <= 0)},{'right':(index >= 1)}]" class="d-f">
          <img :src="item.image" @click="goDetail(index)" />
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
    floor2: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: ""
    };
  },
  components: {},
  methods: {
    goDetail(index) {
      this.$router.push({
        name: "Details",
        query: { id: this.floor2[index].goodsId }
      });
      this.$utils.goDetail(this.floor2[index]);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
   background: red;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 5px;
}
.item1 {
  width: 100%;
  background: white;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
img {
  width: 100%;
}
.titles{
  padding-bottom: 20px;
  padding-top: 20px;

}
.titles2{
  height: 370px;
}
</style>