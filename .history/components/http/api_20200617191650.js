import service from './index'
export default{
    // 1. 获取首页数据(get)
    recommend(){
        return service.get('/recommend')
    },
    // 2. 搜索(get)
    search(){
        return service.get('/search')
    },
    // 3. 分类查询(get)
    classification(id){
        return service.get('/classification?mallSubId=${id}')
    },
    // 4. 查询获取购物车数据(get)
    getCard(){
        return service.get('/getCard')
    },
    // 5. 购物车加减商品(post)
    editCart({id,mallPrice}){
        return service.post('/editCart',{id,mallPrice})
    },
    // 6. 购物车商品删除(post)
    deleteShop(id){
        return service.post('/deleteShop',{id})
    },
    // 7. 购物车支付页面(post)
    order({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{address,tel,orderId,totalPrice,idDirect,count})
    },
    // 8.单个商品详情(get)
    goods(id){
        return service.get('/goods/one?id=${id}')
    },
    // 9. 收藏单个商品(post)
    collection(goods){
        return service.post('/collection',{goods})
    },
}