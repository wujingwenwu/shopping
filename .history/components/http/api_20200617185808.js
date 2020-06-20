import service from './index'
export default{
    recommend(){
        return service.get('/recommend')
    }
}