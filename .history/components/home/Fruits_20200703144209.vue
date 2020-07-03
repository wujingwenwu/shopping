<template>
  <div class="f-d-c">
    <div class="d-f j-c-c m-t-10">
      <div class="item d-f j-c-c a-i-c f-c-b">2F</div>
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
  width: 22px;
  height: 22px;
  background: red;
  border-radius: 50%;
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

</style>