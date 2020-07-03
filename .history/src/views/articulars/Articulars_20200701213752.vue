<template>
 <div>
   <div v-for="(item,index) in list.goods" :key="index">
   <div class="d-f m-t-20">
   <div class="m-l-10">
   <van-rate
            class="m-t-10"
            v-model="list.rate"
            icon="like"
            void-icon="star"
            :size="16"
            color="#ee0a24"
            void-color="#eee"
          />
   </div>
   <div class="p-a wholes">{{list.comment_time}}</div>
   </div>
   <div class="m-t-10">评价内容:{{list.content}}</div>
   <div class="wholes1"></div>
   <div class="d-f m-t-10">
    <img :src="item.image" alt="" width="60">
    <div>{{item.name}}</div>
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
      list:{}
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    //    this.$api.alreadyEvaluated().then(res=>{
    //     this.list = res.data.list
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    this.list =this.$route.query.items
    console.log(this.list);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.wholes{
  left: 150px;
}
.wholes1{
  width: 100%;
  height: 1px;
  background: rgb(214, 213, 213);
  margin-top: 10px;
}
</style>