<template>
<!-- 首页头部 -->
 <div class="background">
   <div class="d-f">
   <div class="d-f m-t-15 m-l-10" @click="click">
    <div>{{city}}</div>
    <i class="iconfont icon-xiajiantou"></i>
    </div>
  <form action="/" class="d-f">
  <van-search
    v-model="value" 
     background="#ededed"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  /> <div @click="onSearch" class="m-t-15">搜索</div>
</form>
   </div>
 <router-view></router-view>
 <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
  <van-tabbar-item icon="search">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     city :'',
     value: '',
     active: 0,
   }
   },
   components: {

   },
   methods: {
        click(){
    this.$router.push('/city')
  },
  onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('搜素');
    }, 
   },
   mounted() {
     let _this = this
      AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    _this.city = data.addressComponent.city
    
    // data是具体的定位信息
  }

  function onError (data) {
    // 定位出错
  }
  })
  
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(237, 237, 237);
}
</style>