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
      <div class="d-f">
      <img :src="item.image" alt="" width="80px">
      <div>
      <div>{{item.name}}</div>
      <div class="d-f">
       <div>￥{{item.orl_price}}</div>
       <div>{{item}}</div>
      </div>
      </div>
      
      </div>
        
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
    onCancel() {
      Toast("取消");
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
</style>