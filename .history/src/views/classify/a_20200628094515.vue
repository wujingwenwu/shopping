<template>
  <div class="d-f">
    <div>
      <van-sidebar v-model="activeKey" @change="clicks">
        <div v-for="(item,index) in categorys" :key="index">
          <van-sidebar-item :title="item.mallCategoryName" />
        </div>
      </van-sidebar>
    </div>
    <van-tabs v-model="active" class="winths" @click="clickc">
      <div v-for="(item,index) in bxMallSubDto" :key="index">
        <van-tab :title="item.mallSubName">
          <van-swipe-cell>
            <div v-for="(item,index) in dataList" :key="index" @click="clicka(item)">
              <van-card
                :price="item.present_price"
                :origin-price="item.orl_price"
                :title="item.name"
                :thumb="item.image"
              />
            </div>
            <!-- <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>-->
          </van-swipe-cell>
        </van-tab>
      </div>
    </van-tabs>
  </div>
</template>
 
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: 0,
      active: 0,
      categorys: [],
      id: "",
      bxMallSubDto: [],
      dataList: [],
      ids: ""
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .classification(this.ids)
        .then(res => {
          this.dataList = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clicks(index) {
      this.bxMallSubDto = this.categorys[this.activeKey].bxMallSubDto;
      this.active = 0;
      this.activeKey = index;
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    },
    clickc(index) {
      this.active = index;
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    },
    clicka(item) {
      this.$router.push({ path: "/details", query: { id: item.id } });
    }
  },
  mounted() {
    this.categorys = JSON.parse(localStorage.getItem("categorys"));
    this.bxMallSubDto = this.categorys[this.activeKey].bxMallSubDto;
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    } else {
      this.ids = this.categorys[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.winths {
  width: 100%;
}
/deep/ .van-tab {
  flex-basis: 27% !important;
}
</style>
