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
  :address-info='addressInfo'
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
          addressInfo:''
     
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
      this.$router.push('/Addresstwo')
    },
   
       
  },
  mounted() {
       this.$api.getAddress().then(res=>{
         res.address.map((item,index)=>{
           this.$set(item,'id',(index+1))
         })
           this.list = res.address,
           
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    
  },
  watch: {},
  computed: {  
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