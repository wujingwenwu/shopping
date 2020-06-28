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
  @click="showList"
 
/>
<div class="d-f" v-for="(item,index) in msgs" :key="index">
  <img :src="item.image_path" alt="" width="100px">
  <div>
   <div class=" f-c-ho">{{item.name}}</div>
   
    <div class=" f-c-ho m-t-30 m-l-20">￥{{item.present_price}}</div>
   
  </div>
  <div class="count">X{{item.count}}</div>
</div>
<div><van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit" /></div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     list:{},
     msgs:[],
     
   }
   },
   components: {

   },
   methods: {
    left(){
      this.$router.push('/toshopping')
    },
    showList(){
      this.$router.push('/list')
      this.showList ===true
    },
    onSubmit(){
      this.$router.push('/');
       this.$toast('支付成功')
       this.$api.deleteShop(msgs).then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       })
    }
   },
   mounted() {
     this.msgs= this.$route.query.msg
     console.log(this.msgs);
       this.$api. getDefaultAddress().then(res=>{
         this.list= res.defaultAdd
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        
   },
   watch: {

   },
   computed: {
      total() {
      let sum = 0;
      this.msgs.map(item => {
          sum += item.mallPrice * item.count;
      });
      return sum;
    }
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
.count{
 position: absolute;
 right: 20px;
margin-top: 50px;
}
</style>