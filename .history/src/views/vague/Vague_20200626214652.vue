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
    <div v-if="value===null"></div>
    <div v-else>
      <div v-for="(item,index) in list" :key="index">
        <div>{{item.name}}</div>
      </div>
    </div>
    <a class="text">
      <span>{{item.name.slice(0,item.name.toLowerCase().indexOf(value.toLowerCase()))}}</span>
      <span
        style="color:#2A70FE"
      >{{item.name.slice(item.name.toLowerCase().indexOf(value.toLowerCase()),item.name.toLowerCase().indexOf(value.toLowerCase())+value.length)}}</span>
      <span>{{item.name.substr(item.name.toLowerCase().indexOf(value.toLowerCase())+value.length)}}</span>
    </a>
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