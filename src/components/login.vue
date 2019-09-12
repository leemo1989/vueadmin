<template>
    <div class="login">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="text-align:center">
            <span><b>37统一账号管理系统</b></span>
          </div>
          <div>
              <el-input placeholder="请输入用户名" v-model="username" size="medium">
                <template slot="prepend"><i class="el-icon-user-solid"></i></template>
              </el-input>
              <br><br>
              <el-input placeholder="请输入密码" v-model="pwd" size="medium" type="password">
                <template slot="prepend"><i class="el-icon-s-finance"></i></template>
              </el-input>
              <br><br>
              <el-button type="primary" style="width:270px" @click="lg">登录</el-button>
          </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"login",
    data() {
        return {
            username:'',
            pwd:'',
        };
    },
    methods:{
        lg(){
            this.$router.push('/')
        }
    }
}
</script>
<style>
    .el-input-group__append, .el-input-group__prepend{
        padding: 0 15px !important;
    }
.box-card{
    position: absolute;
    right:160px;
    top:40%
}
.login{
    width: 100%;
    height: 100%;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}
</style>
