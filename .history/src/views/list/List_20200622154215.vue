<template>
  <!-- 地址列表 -->
  <div>
    <div class="d-f m-t-10">
      
        <div @click="icl">
          <van-icon name="arrow-left" color="#1989fa" size="30px" />
        </div>
        <div class="list">地址列表</div>
     </div> 
     
        <van-address-list
          v-model="chosenAddressId" v-if="index>0"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          
        />
    <div v-else class="list1 d-f j-c-c">
    <img src="./27df50955586a2f417695e6c297e979a.jpg" alt="" width="100%" height="200">
    </div>
    <van-address-list @edit="onEdit"/>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      //     chosenAddressId: '1',
      //   list: [
      //     {
      //       id: '1',
      //       name: '张三',
      //       tel: '13000000000',
      //       address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      //       isDefault: true,
      //     },
      //      {
      //       id: '2',
      //       name: '李四',
      //       tel: '1310000000',
      //       address: '浙江省杭州市拱墅区莫干山路 50 号',
      //     },
      //     ]
    };
  },
  components: {},
  methods: {
    onAdd() {
      
    },
    icl() {
      this.$router.push("/mine");
    },
    onEdit(item, index) {
      this.$router.push("/address");
    }
  },
  mounted() {
    this.$api
      .getAddress()
      .then(res => {
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
.list {
  font-size: 20px;
  margin-left: 120px;
}

</style>