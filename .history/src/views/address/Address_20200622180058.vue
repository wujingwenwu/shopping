<!-- 编辑地址 -->
<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
  <div @click="clic">
  <van-icon name="arrow-left" color="#07c160" size="30px"/>
  </div>
  <div class="f-s-18 address">编辑地址</div>
  </div>
  <div>
<van-address-edit
  :area-list="area"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  
/>

  </div>
 </div>
</template>

<script>
import { Toast } from 'vant';
import area from '../../../server/可能要用的js文件/area'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      searchResult: [],
     
      area:area
   }
   },
   components: {

   },
   methods: {
     clic(){
       this.$router.push('/list')
     },
      onSave() {
        this.$api.address({
       
        name:thisname,
        tel:this.tel,
        address:this.address,
        isDefault:this.isDefault,
        province:this.content.province,
        city:this.content.city,
        county:this.county,
        addressDetail:this.content.addressDetail,
        areaCode:this.content.areaCode
       }).then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       })
    },
    onDelete() {
      Toast('delete');
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