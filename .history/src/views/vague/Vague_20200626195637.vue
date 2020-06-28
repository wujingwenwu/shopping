<template>
 <div>
    <div class="d-f m-t-10 m-l-10">
    <div class="d-f vague">
    <div>成都市</div>
    <i class="iconfont icon-xiajiantou"></i>
    </div>
     <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
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
     value: '',
   }
   },
   components: {

   },
   methods: {
       onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
   },
   mounted() {
    
   },
   watch: {
     value(){
      this.$api.search({value:this.value}).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
     }
   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.vague{
  margin-top: 10px;
}
</style>