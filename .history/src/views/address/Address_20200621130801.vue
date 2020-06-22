<!-- 编辑地址 -->
<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
  <van-icon name="arrow-left" color="#07c160" size="30px"/>
  <div class="f-s-18 address">编辑地址</div>
  </div>
  <div>
  <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
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
       areaList,
      searchResult: [],
   }
   },
   components: {

   },
   methods: {

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
.address{
    margin-left: 120px;
}
</style>