<template>
 <div>
  <div class="d-f m-l-20 m-t-10">
   <van-icon name="arrow-left" @click="left" size="30px"/>
   <div class="settlement">订单结算</div>
  </div>
<div class="settlement1 m-t-20"></div>
<!-- 联系人卡片 -->
<van-contact-card
  type="cardType"
  :name="list.name"
  :tel="list.tel"
  @click="showList = true"
/>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     list:{}
   }
   },
   components: {

   },
   methods: {
    left(){
      this.$router.push('/toshopping')
    }
   },
   mounted() {
       this.$api.getAddress().then(res=>{
         res.address.map((item,index)=>{
           this.$set(item,'id',(index+1))
         })
           this.list = res.address,
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
.settlement{
  margin-left: 100px;
  font-size: 20px;
}
.settlement1{
  width: 100%;
  height: 1px;
  background: #b3b0b0;
}
</style>