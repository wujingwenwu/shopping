<template>
  <div class="items">
    <div class="d-f j-c-c m-t-10">
      <div class="item d-f j-c-c a-i-c f-c-b">1F</div>
      <div class="f-c-ho">休闲食品</div>
    </div>
    <div class="item1 m-t-10">
       <div v-for="(item,index) in floor1" :key="index">
      <div :class="[{'left':(index <= 0)},{'right':(index >= 1)}]" class="d-f">
      <div @click="clickItem(index)">
        <img :src="item.image"/>
        </div>
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
      id:''
    };
  },
  components: {},
  methods: {
    clickItem(index){
      this.$router.push({name:'Details',query:{id:this.floor1[index].goodsId}})
    }
  },
  mounted() {},
  watch: {},
  computed: {
    floor1() {
      return this.$store.state.floor1;
    }
  }
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
  width: 45%;
  
  
}
img {
    width: 100%;
}
.items{
    height: 320px;
}
</style>