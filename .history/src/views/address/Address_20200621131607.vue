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
  <van-area title="标题" :area-list="areaList" />
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
      onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
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
.address{
    margin-left: 120px;
}
</style>