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
      onSave(content) {
        this.content = this.content
        this.$api.address({
       
        name:content.name,
        tel:content.tel,
        address:content.address,
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
       content.name= this.address.name
    },
    onDelete() {
      Toast('delete');
    },
    
   },
   mounted() {
      this.address.name = content.name 
   },
   watch: {

   },
   computed: {
       setName(){
       return this.$store.state.name
     },
        setTel(){
       return this.$store.state.tel
     },
        setCounty(){
       return this.$store.state.county
     },
        setCity(){
       return this.$store.state.city
     },
          setAreaCode(){
       return this.$store.state.areaCode
     },
          setAddressDetail(){
       return this.$store.state.addressDetail
     },
         setAddress(){
       return this.$store.state.address
     },
   }
 }
</script>

<style scoped lang='scss'>
.address{
    margin-left: 120px;
}
</style>