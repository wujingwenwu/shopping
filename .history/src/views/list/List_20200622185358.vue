<template>
  <!-- 地址列表 -->
  <div>
    <div class="d-f m-t-10">
      <div @click="icl">
        <van-icon name="arrow-left" color="#1989fa" size="30px" />
      </div>
      <div class="list">地址列表</div>
    </div>
    <div v-if="list.length<=0" class="list1 d-f j-c-c">
    <div class="list1">您还没有收货地址额，请添加！</div>
    <van-address-list default-tag-text="默认" @add="onAdd" />
    </div>
    
    <div v-else>
    <van-address-list
  v-model="chosenAddressId"
  :list="list"
  
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
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
        list:[],
          chosenAddressId: '1',
   
    };
  },
  components: {},
  methods: {
    onAdd() {
      this.$router.push("/address");
    },
    icl() {
      this.$router.push("/mine");
    },
    onEdit(item, index) {
       this.$router.push("/address");
    },
   
       
  },
  mounted() {
    this.$api
      .getAddress()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
       this.$api.getAddress().then(res=>{
           this.list = res.address,
            this.$store.commit("setName",res.name)
            this.$store.commit("setTel",res.tel)
             this.$store.commit("setCounty",res.county)
            this.$store.commit("setCity",res.city)
            this.$store.commit("setAreaCode",res.areaCode)
            this.$store.commit("setAddressDetail",res.addressDetail)
            this.$store.commit("setAddress",res.address)
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    
  },
  watch: {},
  computed: {
       setName(){
       return this.$store.state.name
     },
        setTel(){
       return this.$store.state.tel
     },
        setCounty(){
       return this.$store.state.county
     },
        setCity(){
       return this.$store.state.city
     },
          setAreaCode(){
       return this.$store.state.areaCode
     },
          setAddressDetail(){
       return this.$store.state.addressDetail
     },
     
     
  }
};
</script>

<style scoped lang='scss'>
.list {
  font-size: 20px;
  margin-left: 120px;
}
.list1{
    font-size: 18px;
    color: rgb(255, 0, 119);
}
</style>