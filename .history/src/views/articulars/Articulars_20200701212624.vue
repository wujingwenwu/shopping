<template>
 <div>
   <div v-for="(item,index) in list" :key="index">
  <div v-for="(item1,index1) in item.goods" :key="index1">
   <div class="d-f m-t-20">
   
   <div class="m-l-10">
   
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
   <div class="m-t-10">评价内容:{{item.content}}</div>
   <div class="wholes1"></div>
   <div class="d-f m-t-10">
    <img :src="item1.image" alt="" width="60">
    <div>{{item1.name}}</div>
   </div>
   </div>
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
      list:[]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
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

</style>