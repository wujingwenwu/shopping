<template>
  <!-- 地址列表 -->
  <div>
    <div class="d-f m-t-10">
      <div @click="icl">
        <van-icon name="arrow-left" color="#1989fa" size="30px" />
      </div>
      <div class="list">地址列表</div>
    </div>
    <div v-if="list.length<=0" class="list1 d-f j-c-c">
    <img src="./27df50955586a2f417695e6c297e979a.jpg" alt="" class="logo">
    <van-address-list default-tag-text="默认" @add="onAdd" />
    </div>
    
    <div v-else>
    
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
        list:[],
          chosenAddressId: '1',
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
      this.$router.push("/address");
    },
    icl() {
      this.$router.push("/mine");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
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
.logo{
    width: 370px;
}
</style>