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
    getCard(id){
        return service.get('/getCard')
    },
    // 5. 购物车加减商品(post)
    editCart(){
        return service.post('/editCart')
    },

    editCart(){
        return service.get('/editCart')
    },
}