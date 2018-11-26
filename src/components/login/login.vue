<template>

    <div class="bg">

        <el-form   class="form"
            label-position="top" 
            label-width="80px" 
            :model="fromData">
            <el-form-item label="用户名">
                <el-input v-model="fromData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="fromData.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click.prevent="login" class="btn">提交</el-button>
        </el-form>
    </div>
</template>
<script>

export default{
    data(){
        return {
            fromData:{
                username:'',
                password:''
            },


        }
    }, 
    //发送请求
    methods:{
      async login(){
           var res=await this.$http.post('login',this.fromData)
           //把数据进行解构赋值
           const{data,meta:{msg,status}}=res.data

           //登陆成功提醒用户  弹出框
           if(status===200){
               this.$router.push({name:'home'})
                this.$message.success(msg);
                //登陆成功跳转页面到主页面
                //在这里获取token 存储到本地  在用户访问别的页面时时， 检测用户有没有登陆过
                localStorage.setItem('token',data.token);
            }else{
                this.$message.error(msg)
            }
        }
    }
}

</script>

<style >
.bg {
    height:100%;
    width:100%;
    background:gray;
    
}
.form {
    width:400px;
    overflow:hidden;
    border:1px solid gray;
    border-radius:5px;
    background:#fff;
    margin:auto;
    position: relative;
    top:100px;
    padding:30px;
}
.btn {
    width:100%;
}

</style>