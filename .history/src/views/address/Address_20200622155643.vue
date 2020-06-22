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
 
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['成都市', '请选择', '请选择']"
 
  @save="onSave"
  @delete="onDelete"
 
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
      searchResult: [],
      id:'',
      name:'',
      tel:'',
      address:'',
      isDefault:"",
      province:'',
      city:'',
      county:'',
      addressDetail:'',
      areaCode:''
   }
   },
   components: {

   },
   methods: {
     clic(){
       this.$router.push('/list')
     }
      onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    
   },
   mounted() {
       this.$api.address({id,name,tel,address,isDefault,province,city,county,addressDetail,areaCode},{
        id:this.id,
        name:this.name,
        tel:this.tel,
        address:this.address,
        isDefault:this.isDefault,
        province:this.province,
        city:this.city,
        county:this.county,
        addressDetail:this.addressDetail,
        areaCode:this.areaCode
       })
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