<template>
 <div>
 <div>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"

  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
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
        chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        }]
        
   
   }
   },
   components: {

   },
   methods: {
      onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>