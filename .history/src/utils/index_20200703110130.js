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
      goDetail(item) {
        // 判断本地有没有最近浏览的数组
        if (!localStorage.views) {
          let arr = []
          arr.push(item)
          localStorage.setItem('views', JSON.stringify(arr))
        } else {
          let arr = JSON.parse(localStorage.views)
          arr.push(item)
          localStorage.setItem('views', JSON.stringify(arr))
        }
       
      },
      onSearch(item) {
        // 判断本地有没有搜索记录的数组
        if (!localStorage.searchHistroy) {
          let ass = []
          ass.push(item)
          localStorage.setItem('searchHistroy', JSON.stringify(ass))
        } else {
          let ass = JSON.parse(localStorage.searchHistroy)
          ass.push(item)
          localStorage.setItem('searchHistroy', JSON.stringify(ass))
        }
      }   
}