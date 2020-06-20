<template>
<!-- 城市定位 -->
 <div>
 <div class="d-f m-t-15">
 <div  @click="clicks">
<i class="iconfont icon-zuojiantou"></i>
</div>
  <div class="city">城市列表</div>
 </div>
 <div class="city2">
   <form action="/">
  <van-search
    v-model="value"
    
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<div>当前城市</div>
 </div>
 <div class="city3 d-f j-c-c a-i-c m-t-10">{{city}}</div>
<div class="city4 d-f a-i-c m-t-10">热门城市</div>
<div class="d-f city6">
   <div v-for="(item,index) in hotCities" :key="index" >
  <div class="city5 d-f j-c-c a-i-c">{{item.name}}</div>
   </div>
   </div>
   <div>
   <van-index-bar class="indexBar" :sticky="false" highlight-color="#AE853A">
        <div v-for="(item,index) in msg" :key="index">
          <van-index-anchor :index="item" :key="index" />
          <van-cell v-for="(item,index) in datas" :key="index"/>
		  <div>{{item.name}}</div>
        </div>
      </van-index-bar>
   </div>
 </div>
</template>

<script>
import city from '../../../server/可能要用的js文件/city'
import { Toast } from 'vant';
 export default {
   name:'',
   props:{

    },
   data () {
     return {
         city :'',
		 value: '',
		
		 city: city,
      msg: [],
      datas: [],
		"hotCities": [{
			"id": 1,
			"spell": "beijing",
			"name": "北京"
		}, {
			"id": 3,
			"spell": "shanghai",
			"name": "上海"
		}, {
			"id": 47,
			"spell": "xian",
			"name": "杭州"
		}, {
			"id": 239,
			"spell": "sanya",
			"name": "重庆"
		}, {
			"id": 188,
			"spell": "lijiang",
			"name": "成都"
		}, {
			"id": 125,
			"spell": "guilin",
			"name": "厦门"
		}],
	
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
	 clicks(){
	  this.$router.push('/')
  }
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
    console.log(data);
    // data是具体的定位信息
  }

  function onError (data) {
    // 定位出错
  }
  }),
   this.datas = this.city.data.cities;
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
 
   },
   watch: {

   },
   computed: {
    
   }
 }
</script>

<style scoped lang='scss'>
.icon-zuojiantou{
    font-size: 30px;
    margin-left: 10px;
}
.city{
    font-size: 18px;
    margin-left: 120px;
}
.city2{
    width: 100%;
    height: 80px;
    background: rgb(237, 237, 237);
}
.city3{
    width: 100px;
    height: 20px;
    border: 1px solid #000000;
}
.city4{
    width: 100%;
    height: 40px;
    background: rgb(237, 237, 237);
}
.city5{
    width: 100px;
    height: 20px;
    border: 1px solid #000000;
    margin-left: 18px;
    margin-top: 15px;
}
.city6{
    flex-wrap: wrap;
    width: 370px;
}
.city7{
    width: 300px;
}
</style>