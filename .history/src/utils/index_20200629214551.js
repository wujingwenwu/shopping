import Vue from 'vue'
import { Dialog } from 'vant';
export default{
    collection(item) {
        // 判断本地有没有收藏的数组
        if(!localStorage.collect) {
          let ass = []
          ass.push(item)
          localStorage.setItem('collect',JSON.stringify(ass))
        } else {
          let ass = JSON.parse(localStorage.collect)
          ass.push(item)
          localStorage.setItem('collect',JSON.stringify(ass))
        }
      },   
}