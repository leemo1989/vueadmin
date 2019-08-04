<template>
    <el-row type="flex" style="height: 100%">
        <el-aside :style="showside">
            <div style="overflow: hidden;height: 50px;color:white;border-bottom:1px solid #101117">
                <div v-if="t" style="height:50px;display: flex;align-items: center;justify-content: center">
                    <img src="../assets/yhosa.png">
                </div>
                <div style="margin-left: 18px;height:50px;display: flex;align-items: center" v-else>
                    <img src="../assets/yhosa.png" style="margin-right:10px;"><h2>YH监控平台</h2>
                </div>
            </div>

            <el-menu :router="true" :collapse="t" :collapse-transition="false"
                background-color="#191a23"
                     text-color="#fff"
            >
                <el-menu-item index="/dashboard">
                    <i class="el-icon-upload"></i>
                    <span>总览</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>采集器部署</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/form">form</el-menu-item>
                        <el-menu-item index="/yewu">业务拓扑</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <span>作业系统</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/unitwork">一次性作业</el-menu-item>
                        <el-menu-item index="/yewu">编辑作业</el-menu-item>
                        <el-menu-item index="/yewu">查看作业</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>监控模板</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>中间件监控</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>智能分析</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>中间件监控</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-phone"></i>
                    <span>告警模板</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-upload"></i>
                    <span>故障自愈</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>系统设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container style="height: 100%">
            <el-header>
                <el-col :span="1">
                    <el-button icon="el-icon-menu" size="mini" @click="toggleshow" style="border: none"></el-button>
                </el-col>
                <el-col :span="2">
                    <el-breadcrumb>
                        <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :span="3" :offset="18">
                    <el-badge :value="unreadnum" v-show="unreadnum >0">
                        <el-button icon="fa fa-envelope-o fa-2x" size="small" style="border: none" @click="catmessage"></el-button>
                    </el-badge>
                    <el-divider direction="vertical"></el-divider>
                    <el-dropdown trigger="click" size="mini" @command="handleCommand">
                        <span><el-button circle icon="el-icon-user"></el-button> 王磊<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>登出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-row>
</template>
<script>
export default {
    data(){
        return {
            showside:'width:256px',
            t:false,
        }
    },
    computed:{
        unreadnum:function(){
            return this.$store.state.unread.length
        }
    },
    methods:{
        catmessage(){
            this.$router.push('/message')
        },
        handleCommand(){
            this.$router.push('/login')
        },
        toggleshow(){
            this.t = !this.t
            if(this.t){
                this.showside='width:5.5rem'
            }else{
                this.showside='width:18rem'
            }

        }
    }
}
</script>
<style type="text/css">
    .el-badge__content.is-fixed{
        top:10px !important;
        right:20px !important;
    }
    .el-main{
        height: 100%;
        background:rgba(248, 249, 252);
    }
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
        margin-bottom: 5px;
        box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15);
    }
    .el-aside{
        height: 100vh;
        background:#191a23;
        box-shadow:2px 0 6px rgba(0,21,41,.35);
        //z-index: 3;

    }
    .el-menu-item{
        font-size:12px !important;
    }
    .el-menu{
        border: none !important;
    }
    .el-menu-item.is-active{
        background:#2d8cf0!important;
        color: #ffffff !important;
    }
</style>
