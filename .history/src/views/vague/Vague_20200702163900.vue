<template>
  <div>
    <div class="top">
      <div class="search">
      <form action="/">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" class="search1"  background="#cfcccc">
       
          <template #action>
            <div @click="back">取消</div>
          </template>
        </van-search>
         </form>
      </div>
    </div>


    
    <div class="content">
      <div class="search-bg">
        <div v-if="value === ''">
          <div v-if="this.arr.length === '' ">暂无搜索历史</div>
          <div v-else>
            <div class="searchHistory">
              <div class="h-top">
                <div>搜索历史</div>
                <div @click="dels" class="icon">
                  <van-icon name="delete" size="20" />
                </div>
              </div>
              <div class="box">
                <div class="box-history">
                  <div v-for="(item1,index1) in arr" :key="index1" class="history">
                    <div @click="click" class="bhfont">{{item1}}</div>
                    <div @click="del(index1)">
                      <van-icon name="close" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- 如果搜索出来没有商品 提示没有商品 -->
          <div v-if="searchlist.length < 1 || value === ' ' ">
            <van-cell>暂无历史记录</van-cell>
          </div>
          <!-- 如果搜索出了商品  -->
          <div v-else class="aaa">
            <!-- 循环显示商品信息 -->
            <van-cell v-for="item in searchlist" :key="item.id">
              <div class="mysearch-list" @click="goDetail(item)">
                <img :src="item.image" class="search-img" />
                <div v-html="item.names" class="goods-name"></div>
              </div>
            </van-cell>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searched",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      searchlist: [],
      arr: [],
      list:""
    };
  },
  methods: {
    getSearch() {
      if (this.value !== "") {
        this.$api.search(this.value)
        .then(res => {
            res.data.list.map(item => {
              this.$set(item, "names", item.name);
            });
            this.searchlist = res.data.list;
            console.log(this.searchlist);
            //高亮
            this.searchlist.map(item => {
              let replaceReg = new RegExp(this.value, "g"); // 匹配关键字正则
              let replaceString =
                '<span class="highlights-text">' + this.value + "</span>"; // 高亮替换v-html值
              item.names = item.names.replace(replaceReg, replaceString); // 开始替换
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    goDetail(item) {
      this.$router.push({
        path: "/details",
        query: { id: item.id }
      });
      
      
    },
    // 删全部
    dels() {
      this.arr = []
      localStorage.setItem('value',JSON.stringify(this.arr))
    },
    // 删单个
    del(index1) {
      this.arr.splice(index1,1)
      localStorage.setItem('value',JSON.stringify(this.arr))
    },
    click() {
      this.value = item1
    },
    back(){
        this.$router.go(-1)
    }
  },

  mounted() {
    this.value = this.$route.query.value;
    this.getSearch();
    this.arr = JSON.parse(localStorage.getItem("value"));
  },
  watch: {
    value(val, oldVal) {
      if (this.value === val) {
        this.getSearch();
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(207, 204, 204);
  height: 70px;
 margin-left: -1px;
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
// 搜索页 页面样式
.search-bg {
  background: rgb(184, 178, 178);
  font-size: 16px;
}
.mysearch-list {
  display: flex;
  height: 80px;
}
.search-img {
  width: 70px;
  height: 70px;
  margin: 0 10px;
}
.goods-name {
  margin: 0 8px;
  line-height: 20px;
}
.searchHistory {
  width: 100%;
  height: 100%;
  background: rgb(185, 180, 180);
}
.h-top {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: #999;
  margin-bottom: 10px;
}
.icon {
  height: 20px;
  width: 20px;
}
.box {
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-history {
  width: 95%;
  height: 95%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.history {
  width: 60px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 30px;
  background: orange;
  border: 1px solid rgb(241, 240, 240);
  color: #999;
  font-size: 12px;
}
.bhfont {
  color: white;
}


.van-cell {
    height: 100px;
}
.van-search__action {
    margin-left: 10px;
    background: #fff;
}
.van-search{
    background: #fff;
}
.van-search__content{
    background: #fff;
    height: 50px;
}
.van-cell__value {
    height: 50px;
    line-height: 50px;
}
.van-field__left-icon {
    height: 20px;
    line-height: 50px;
}
.aaa .van-cell .van-cell__value {
    height: 100px !important;
}

</style>