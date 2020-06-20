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
    // 10. 取消收藏(post)
    cancelCollection(id){
        return service.post('/cancelCollection',{id})
    },
    // 11. 查询商品是否已收藏(post)
    cisCollection(id){
        return service.post('/isCollection',{id})
    },
    // 12. 加入购物车(post)
    cisCollection(id){
        return service.post('/isCollection',{id})
    },
    
//    13. 退出登录(post)
     loginOut(){
        return service.post('/loginOut')
    },
    // 14. 获取用户信息(post)
    queryUser(){
        return service.post('/queryUser')
    },
    // 15. 修改保存用户信息(post)
    saveUser({gender,year,month,day,id,nickname}){
        return service.post('/saveUser',{gender,year,month,day,id,nickname})
    },
    // 16. 查询用户订单数量(get)
    myOrder(){
        return service.get('/myOrder/orderNum')
    },
    // 17. 商品评论(post)
    goodsOne({id,rate,content,anonymous,_id,nickname}){
        return service.post('/goodsOne/comment',{gender,year,month,day,id,nickname})
    },


}