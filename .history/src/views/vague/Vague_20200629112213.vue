<template>
  <div>
    <div class="d-f m-t-10 m-l-10">
      <div class="d-f vague">
        <div>成都市</div>
        <i class="iconfont icon-xiajiantou"></i>
      </div>
      <span class="highlights-text">
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </span>
    </div>
    <div v-if="value===null"></div>
    <div v-else>
      <div v-for="(item,index) in list" :key="index">
        <div class="d-f m-t-10" @click="clickxs(index)">
          <img :src="item.image" alt width="80px" />
          <div>
            <div>{{item.name}}</div>
            <div class="d-f">
              <div class="f-c-ho">￥{{item.orl_price}}</div>
              <div class="t-d-l-t m-l-10 m-t-5">{{item.present_price}}</div>
            </div>
          </div>
        </div>
        <div class="vague1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      value: "",
      list: []
    };
  },
  components: {},
  methods: {
    onSearch(value) {
      this.$api
        .search(this.value)
        .then(res => {
          this.list = res.data.list;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickxs(index){
     this.$touter.push({name:"Details",query:{id:this.list[index]}})
    },
    onCancel() {
      this.$router.push("/")
    },
    highlights() {
      const search = this.search;
      this.showdata = this.showdata.map(item => {
        for (let key in item) {
          if (key === "Issuecontent") {
            let replaceReg = new RegExp(search, "value"); // 匹配关键字正则
            let replaceString =
              '<span class="highlights-text">' + search + "</span>"; // 高亮替换v-html值
            item[key + "-highlights"] = item[key].replace(
              replaceReg,
              replaceString
            ); // 开始替换
          }
        }
        return item;
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.vague {
  margin-top: 10px;
}
.vague1{
  width: 100%;
  height: 1px;
  background: #a8a6a6;
   margin-top: 10px;
}
</style>