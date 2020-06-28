<template>
  <div>
    <div class="pin">商品分类</div>
    <!-- 侧边栏 -->
    <div class="dis-1">
      <div>
        <van-sidebar v-model="activeKey" @change="onChange">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>
      <!-- 标签栏 -->
      <van-tabs
        v-model="active"
        class="m-t"
        @click="clickitem"
        line-width="20%"
        title-active-color="red"
      >
        <van-tab v-for="(item,index1) in bxMallSubDto" :key="index1" :title="item.mallSubName">
          <div v-for="(item,index) in dataList" :key="index" @click="clicked(item)">
            <van-card
              :title="item.name"
              :price="item.present_price"
              :origin-price="item.orl_price"
              :thumb="item.image_path"
            />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      category: [],
      bxMallSubDto: [],
      dataList: [],
      activeKey: 0,
      active: 0,
      id: ""
    };
  },
  methods: {
    // 跳转详情页
    clicked(item) {
      this.$router.push({ name: "Details", query: { id: item.id } });
    },

    // 侧边栏点击事件
    onChange(index) {
      this.active = 0;
      this.activeKey = index;
      this.bxMallSubDto = this.category[this.activeKey].bxMallSubDto;
      this.id = this.category[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.classification();
    },
    // 标签栏点击事件
    clickitem(index) {
      this.active = index;
      this.id = this.category[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.classification();
    },

    // 分类数据
    classification() {
      this.$api
        .classification(this.id)
        .then(res => {
          this.dataList = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 取出localStorage的分类数据
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
      this.id = this.category[this.activeKey].bxMallSubDto[0].mallSubId;
      this.classification();
    } else {
      this.id = this.category[0].bxMallSubDto[0].mallSubId;
      this.classification();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.pin {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
/deep/.van-tab {
  height: 60px;
  flex-basis: 27% !important;
}
.zhanwei {
  height: 50px;
}
</style>
