<template>
 <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div>
       <img src="../../../server/可能要用的图片/evaluate.jpg" alt="" width="100%">
      </div>
      <div class="whole1">
      <van-tabs v-model="active">
  <van-tab title="待评价" >
    <div v-for="(item,index) in arr" :key="index">
   
    <div class="m-t-20 ">
    <div class="d-f"> 
      <img :src="item.image_path" alt="" width="100">
      <div>
      <div>{{item.name}}</div>
      <div class="whole2 d-f j-c-c a-i-c" @click="wholes(item)">
     <van-icon name="chat" color="red" />
     <div class=" f-c-ho f-s-14">评论晒单</div>
      </div>
      </div>
      
      </div>
    </div>
   
    
    
    </div>
  </van-tab>
  <van-tab title="已评价">
  <div v-for="(item,index) in list" :key="index">
  <div v-for="(item1,index1) in item.goods" :key="index1">
   <div class="d-f m-t-20">
   <img :src="item1.image" alt="" width="60">
   <div class="m-l-10">
   <div>{{item.content}}</div>
   <van-rate
            class="m-t-10"
            v-model="item.rate"
            icon="like"
            void-icon="star"
            :size="16"
            color="#ee0a24"
            void-color="#eee"
          />
   </div>
   <div class="p-a wholes">{{item.comment_time}}</div>
   </div>
   <div>评价内容{{item}}</div>
   </div>
  </div>
  </van-tab>
  
</van-tabs>
      </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     active:0,
     arr:[],
     item:[],
     list:[]
   }
   },
   components: {

   },
   methods: {
     whole(){
       this.$router.push('/mine')
     },
     wholes(item){
        this.$router.push({name:'Evaluation',query:{item:item}})
     }
   },
   mounted() {
         this.$api
      .tobeEvaluated()
      .then(res => {
        this.arr = res.data.list
        
      
      })
      .catch(err => {
        console.log(err);
      });
      this.$api.alreadyEvaluated().then(res=>{
        this.list = res.data.list
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
.whole{
  margin-left: 120px;
}
.whole1{
  width: 300px;
  height: 50px;
  background: white;
  border-radius: 5px;
position: absolute;
  top: 35%;
  left: 10%;
  box-shadow: 1px 1px 7px ;
}
.whole2{
  width: 80px;
  height: 25px;
  border: 1px solid red;
  border-radius: 30px;
  position: absolute;
  right: 0;
  margin-top: 20px;
}
.wholes{
  left: 205px;
}
</style>