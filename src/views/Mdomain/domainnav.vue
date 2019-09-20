<template>
        <div class="container">
            <div class="easide" :class="{showleftnav:!t,hideleftnav:t}">
                <div style="padding-left:20px;text-shadow:2px 2px 5px #333333;"><h1>域名管理</h1></div>
                <el-menu :router="true" :collapse="t" :collapse-transition="false">
                    <!--el-menu-item index="/dashboard">
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
                            <el-menu-item index="/taskwork">编辑作业</el-menu-item>
                            <el-menu-item index="/yewu">查看作业</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu-->
                    <el-menu-item index="/domain/dorder">
                        <i class="el-icon-set-up"></i>
                        <span>域名工单</span>
                    </el-menu-item>
                    <el-menu-item index="/domain">
                        <i class="el-icon-upload"></i>
                        <span>域名管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="content" :class="{showcont:!t,hidecont:t}">
                <router-view></router-view>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            t:false,
            drawer:false,
        }
    },
    computed:{
        unreadnum:function(){
            return this.$store.state.unread.length
        }
    },
    methods:{
        lougout(){
            console.log(1111)
          this.$route.push('/login')
        },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
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
    .el-divider--horizontal{
        margin:10px 0 !important;
    }
    /* 此处用来缩放页面，对应4个css，导航和内容页 */
    .showleftnav {width:230px;}
    .hideleftnav {width:66px;}
    .showcont{padding-left:250px;}
    .hidecont{padding-left:86px;}
    /* 缩放css end */
    header{
        display: flex;
        height: 60px;
        background: #fafbfc;
        align-items: center;
        width: 100%;
        box-shadow:0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
        position:fixed;
        top:0;
        z-index: 3;
    }
    .el-badge__content.is-fixed{
        top:10px !important;
        right:20px !important;
    }
    .sline{
        background:#dee2e6;
        height: 30px;width: 1px;
        margin-left:10px;
    }
    .content{
        background: #f1f4f6;
        padding-top:20px;

        width: 100%;
        overflow: auto;
        padding-bottom: 80px;
    }
    .container{
        width: 100%;
        padding-top:60px;
        flex:1;
        display: flex;
        z-index: 1;
        position: relative;
        overflow: auto;
        height: 100vh;

    }
    .el-breadcrumb{
        line-height: 50px
        !important;
    }
    .easide{
        height: 100vh;
        box-shadow:7px 0 60px rgba(0,0,0,0.05);
        position: fixed;
        background: #fff;
        z-index:2;
        overflow: hidden;
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
