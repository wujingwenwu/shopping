<!-- 修改地址 -->
<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
  <div @click="clic">
  <van-icon name="arrow-left" color="#07c160" size="30px"/>
  </div>
  <div class="f-s-18 address">修改地址</div>
  </div>
  <div>
<van-address-edit
  :area-list="area"
  show-postal
  show-delete
  show-set-default
  show-search-result
   :address-info='addressInfo'
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
     addressInfo:{},
      area:area
   }
   },
   components: {

   },
   methods: {
     clic(){
       this.$router.push('/list')
     },
     onSave(content) {
       console.log(content);
        this.content = this.content
        this.$api.address({
       
        name:content.name,
        tel:content.tel,
        address:`${content.province}${content.city}${content.county}${content.addressDetail}`,
        isDefault:content.isDefault,
        province:content.province,
        city:content.city,
        county:content.county,
        addressDetail:content.addressDetail,
        areaCode:content.areaCode
       }).then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       }),
       this.$router.push('/list')
    },
    onDelete(id) {     
      this.$api.deleteAddress(id).then(res=>{
        this.$router.push('/list')
         console.log(res);  
      }).catch(err=>{
          console.log(err);
      })
    },
    
   },
   mounted() {
       this.addressInfo=JSON.parse(this.$route.query.obj)
       console.log(this.addressInfo);
   },
   watch: {

   },
   computed:{}, 
   
 }
</script>

<style scoped lang='scss'>
.address{
    margin-left: 120px;
}
</style>