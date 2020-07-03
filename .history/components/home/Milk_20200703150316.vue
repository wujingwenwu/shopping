<template>
  <div class="f-d-c ">
    <div class="d-f j-c-c m-t-10 ">
      <div class="item d-f j-c-c a-i-c f-c-b">3F</div>
      <div class="f-c-ho">营养奶品</div>
    </div>
    <div>
      <div v-for="(item,index) in floor3" :key="index">
        <div :class="[{'left':(index <= 0)},{'right':(index >= 1)}]" class="d-f">
          <img :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor3: {
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
  methods: {},
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
.title {
  height: 300px;
}

</style>