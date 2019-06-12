<template>
    <el-row type="flex" style="height: 100%">
        <el-aside width="200px">
            <div style="height: 50px;overflow: hidden;text-align: center;color:white;background: #409EFF;">
                 <h1>YH监控平台</h1>
            </div>

            <el-menu :router="true">
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>主页</span>
                    </template>

                    <el-menu-item-group>
                        <template slot="title">常用插件</template>
                        <el-menu-item index="/table">table</el-menu-item>
                        <el-menu-item index="/form">form</el-menu-item>
                        <el-menu-item index="/yewu">业务拓扑</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>监控模板</span>
                </el-menu-item index="2">
                <el-menu-item>
                    <i class="el-icon-phone"></i>
                    <span>告警模板</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-setting"></i>
                    <span>系统设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container style="height: 100%">
            <el-header>
                <el-col :span="1">
                    <i class="el-icon-menu" size="mini"></i>
                </el-col>
                <el-col :span="2">
                    <el-breadcrumb>
                        <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :span="2" :offset="19">
                    <el-dropdown split-button trigger="click" size="mini">
                        王磊
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>登出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-header>
            <el-main style="height: 100%;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-row>
</template>
<script>
export default {
    data(){
        return {
        }

    }
}
</script>
<style type="text/css">
    .el-container{
        height: 50px;
    }
    .el-breadcrumb{
        line-height: 50px
        !important;
    }
    .el-header{
        height: 50px !important;
        line-height: 50px;
        //box-shadow:1px 1px 5px #333333;
        background: #409EFF;
        color:#fff;
    }
    .el-aside{
        //background: #409EFF;
        height: 100%;
        //border-right:solid 1px #e6e6e6
    }
    .el-menu-item{
        font-size:12px !important;
    }
</style>
