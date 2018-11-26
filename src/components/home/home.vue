<template>
<el-container class="conter">
    <el-header>
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">

                </div>
                <img src="../../assets/img/logo.png" alt="">
                </el-col>
                <el-col :span="16" class="hm">
                    <div class="grid-content bg-purple-light">
                        <h2>黑马程序员</h2>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-button type="info" class="btn" @click.prevent="del()">退出登陆</el-button>
                    </div>
                </el-col>
        </el-row>

    </el-header>
    <el-container>

        <el-aside width="200px">
            <el-menu default-active="2" 
            class="el-menu-vertical-demo" 
            :router="true"
            :unique-opened="true"
             >
            
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/user">
                        
                        <i class="el-icon-menu"></i>
                            用户列表
                    
                    </el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item index="1-3"> <i class="el-icon-menu"></i>角色列表</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="1-3"> <i class="el-icon-menu"></i>商品列表</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="1-3"> <i class="el-icon-menu"></i>分类参数</el-menu-item>
                    </el-menu-item-group>
                      <el-menu-item index="1-3"> <i class="el-icon-menu"></i>商品分类</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="1-3"> <i class="el-icon-menu"></i>订单列表</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                 <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据统计</span>
                    </template>
                    <el-menu-item index="1-3"> <i class="el-icon-menu"></i>数据报表</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-main>
            <router-view></router-view>

        </el-main>
    </el-container>
</el-container>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        beforeCreate() {
            //检测是否有登陆数据  没有跳转到登陆页面
            var token=localStorage.getItem("token");
            if(!token){
                this.$router.push({name:'login'});
            }
        },
        methods:{
            //点击退出登陆清除本地存储
            del(){
                localStorage.clear();
                this.$router.push({name:'login'});
            }
        }

    }
</script>

<style>
.conter {
    height: 100%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
}

.el-aside {
    background-color: #D3DCE6;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
}

.hm {
    text-align: center;
}

.btn {
    margin-top: 7px;
}
</style>
