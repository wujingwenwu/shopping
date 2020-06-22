<template>
<!-- 地址列表 -->
 <div>
 <div class="d-f m-t-10">
 <div v-if="index>=0">
 <div @click="icl">
  <van-icon name="arrow-left" color="#1989fa" size="30px"/>
  </div>
  <div class="list">地址列表</div>
 </div>
 <div>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
 </div>
 <div v-else>暂无收货地址</div>
 </div>
 
 </div>
</template>

<script>
import { Toast } from 'vant';
 export default {
   name:'',
   props:{

    },
   data () {
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
        
   
   }
   },
   components: {

   },
   methods: {
      onAdd() {
      this.$router.push('/address')
    },
    icl(){
     this.$router.push('/mine')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
   },
   mounted() {
     this.$api.getAddress().then(res=>{
         console.log(res);
     }).catch(err=>{
         console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.list{
    font-size: 20px;
    margin-left: 120px;
}
</style>