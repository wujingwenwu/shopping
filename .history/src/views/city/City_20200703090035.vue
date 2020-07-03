<template>
  <!-- 城市定位 -->
  <div>
    <div class="d-f m-t-15">
      <div @click="clicks">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="city">城市列表</div>
    </div>
    <div class="city2">
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" @click="flag=true" />
      </form>
      <div>当前城市</div>
    </div>
    <div class="city3 d-f j-c-c a-i-c m-t-10">成都市</div>
    <div class="city4 d-f a-i-c m-t-10">热门城市</div>
    <div class="d-f city6">
      <div v-for="(item,index) in hotCities" :key="index">
        <div class="city5 d-f j-c-c a-i-c">{{item.name}}</div>
      </div>
    </div>
    <div v-if="flag===false">
      <van-index-bar class="indexBar" :sticky="false" highlight-color="#AE853A" >
        <div v-for="(item,index) in msg" :key="index">
          <van-index-anchor :index="item" :key="index" />
          <van-cell v-for="items in datas[item]" :key="items.id" :title="items.name" />
        </div>
      </van-index-bar>
    </div>
    <div v-else>
      <div v-for="(item1,index1) in cityas" :key="index1">
      
      
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../../server/可能要用的js文件/city";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
     
      flag:false,
      value: "",
      city: city,
      msg: [],
      datas: [],
      cityas:[],
      hotCities: [
        {
          id: 1,
          spell: "beijing",
          name: "北京"
        },
        {
          id: 3,
          spell: "shanghai",
          name: "上海"
        },
        {
          id: 47,
          spell: "xian",
          name: "杭州"
        },
        {
          id: 239,
          spell: "sanya",
          name: "重庆"
        },
        {
          id: 188,
          spell: "lijiang",
          name: "成都"
        },
        {
          id: 125,
          spell: "guilin",
          name: "厦门"
        }
      ]
    };
  },
  components: {},
  methods: {
   
    clicks() {
      this.$router.push("/");
    }
  },
  mounted() {
   
      this.datas = this.city.data.cities;
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
  },
  watch: {
    value(val){
      let arr=[]
      for(let i in this.datas){
        arr.push(this.datas[i])
      }
      let cityss =[]

      arr.map(item=>{
        item.map(item1=>{
           cityss.push(item1)
        })
       
      });
       let cityas =[]
     this.cityas = cityLists.filter(item => {
        return JSON.stringify(item).includes(val);
      });
      console.log(cityas);
    }
  },
  computed: {
   
  }
};
</script>

<style scoped lang='scss'>
.icon-zuojiantou {
  font-size: 30px;
  margin-left: 10px;
}
.city {
  font-size: 18px;
  margin-left: 120px;
}
.city2 {
  width: 100%;
  height: 80px;
  background: rgb(237, 237, 237);
}
.city3 {
  width: 100px;
  height: 20px;
  border: 1px solid #000000;
}
.city4 {
  width: 100%;
  height: 40px;
  background: rgb(237, 237, 237);
}
.city5 {
  width: 100px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 18px;
  margin-top: 15px;
}
.city6 {
  flex-wrap: wrap;
  width: 370px;
}
.city7 {
  width: 300px;
}
</style>