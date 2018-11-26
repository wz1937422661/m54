//开发vue插件
import axios from 'axios';
const MyHttpServer={};

MyHttpServer.install=(Vue)=>{
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    Vue.prototype.$http=axios
}

//导出
export default MyHttpServer