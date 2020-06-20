import service from './index'

export default{
    // 1. 获取首页数据(get)
    recommend(){
        return service.get(`/recommend`)
    },
    // 2. 搜索(get)
    search(value){
        return service.get(`/search=${value}`)
    },
    // 3. 分类查询(get)
    classification(id){
        return service.get(`/classification?mallSubId=${id}`)
    },
    // 4. 查询获取购物车数据(get)
    getCard(){
        return service.get(`/getCard`)
    },
    // 5. 购物车加减商品(post)
    editCart({id,mallPrice,count}){
        return service.post(`/editCart`,{id,mallPrice,count})
    },
    // 6. 购物车商品删除(post)
    deleteShop(id){
        return service.post(`/deleteShop`,{id})
    },
    // 7. 购物车支付页面(post)
    order({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post(`/order`,{address,tel,orderId,totalPrice,idDirect,count})
    },
    // 8.单个商品详情(get)
    goods(id){
        return service.get(`/goods/one?id=${id}`)
    },
    // 9. 收藏单个商品(post)
    collection(goods){
        return service.post(`/collection`,{goods})
    },
    // 10. 取消收藏(post)
    cancelCollection(id){
        return service.post(`/cancelCollection`,{id})
    },
    // 11. 查询商品是否已收藏(post)
    cisCollection(id){
        return service.post(`/isCollection`,{id})
    },
    // 12. 加入购物车(post)
    addShop(id){
        return service.post(`/addShop`,{id})
    },
    
//    13. 退出登录(post)
     loginOut(){
        return service.post(`/loginOut`,{})
    },
    // 14. 获取用户信息(post)
    queryUser(){
        return service.post(`/queryUser`,{})
    },
    // 15. 修改保存用户信息(post)
    saveUser({gender,year,month,day,id,nickname}){
        return service.post(`/saveUser`,{gender,year,month,day,id,nickname})
    },
    // 16. 查询用户订单数量(get)
    myOrder(){
        return service.get(`/myOrder/orderNum`)
    },
    // 17. 商品评论(post)
    goodsOne({id,rate,content,anonymous,_id,order_id,image}){
        return service.post(`/goodsOne/comment`,{id,rate,content,anonymous,_id,order_id,image})
    },
    // 18. 获取登录注册默认验证码(get)
    verify(){
        return service.get(`./verify`)
    },
    // 19. 查询用户收货地址(get)
    getAddress(){
        return service.get(`/getAddress`)
    },
    // 20. 查询默认收货地址(get)
    getDefaultAddress(){
        return service.get(`/getDefaultAddress`)
    },
    // 21. 设置默认收货地址(post)
    setDefaultAddress(id){
        return service.post(`/setDefaultAddress`,{id})
    },
    // 22. 增加收货地址(post)
    address({id,name,tel,address,isDefault,province,city,county,addressDetail,areaCode}){
        return service.post(`/address`,{id,name,tel,address,isDefault,province,city,county,addressDetail,areaCode})
    },
    // 23. 删除地址(post)
    deleteAddress(id){
        return service.post(`/deleteAddress`,{id})
    },
    // 24. 查询我的收藏(get)
    collection(){
        return service.get(`/collection/list`)
    },
    // 25. 注册(post)
    register({nickname,password,verify}){
        return service.post(`/register`,{nickname,password,verify})
    },
    // 26. 登录(post)
    login({nickname,password,verify}){
        return service.post(`/login`,{nickname,password,verify})
    },
    // 27. 订单查询(get)
    getMyOrder(){
        return service.get(`/getMyOrder`)
    },
    // 28. 查询已评价(get)
    alreadyEvaluated(){
        return service.get(`/alreadyEvaluated`)
    },
    // 29. 查询未评价(get)
    tobeEvaluated(){
        return service.get(`/tobeEvaluated`)
    },
    // 30. 查询单条评论(post)
    evaluateOne({_id,id,}){
        return service.post(`/evaluateOne`,{_id,id,})
    },
}