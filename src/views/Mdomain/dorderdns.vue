<template>
	<el-card>
		<div slot="header">
			<el-page-header @back="goBack" content="详情页面">
			</el-page-header>
		</div>
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="步骤 1-运维"></el-step>
			<el-step title="步骤 2-采购"></el-step>
			<el-step title="步骤 3-购买"></el-step>
		</el-steps>
		<div style="clear:both"></div>
		<div style="margin-top:50px">
			<div v-if="active == 0" style="width: 500px;margin: 0 auto">
				<el-form ref="form" :model="form" label-width="200px" size="mini" style="margin:0 auto">
					<el-form-item label="选择域名">
  <el-select v-model="value1" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
					</el-form-item>
					<el-form-item label="套餐">
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
					</el-form-item>
				</el-form>
			</div>
			<div v-if="active == 1">
				<div  style="width:80%;margin: 0 auto">


	  <el-table :data="tableData" size="mini" style="margin-bottom:30px">
		<el-table-column
		  prop="project_name"
		  fixed
          :filters="plist"
		  width="150"
		  fixed
		  label="域名">
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="业务线"
		  width="200"
		  >
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="申请原因"
		  width="200"
		  >
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="备案公司"
		  width="200"
		  >
		</el-table-column>
		<el-table-column
		  prop="rev_time"
		  label="注册公司"
		  width="90"
		  >
		</el-table-column>
		<el-table-column
		  prop="rev_time"
		  label="域名解析商帐号"
		  width="150"
		  >
			<template slot-scope="scope">
                gndnspod@37.com
			</template>
		</el-table-column>
		  <el-table-column
		  prop="appli_time"
		  label="业务负责人"
		  width="200"
		  >
		</el-table-column>
		<el-table-column
		  label="操作"
		  fixed="right"
		  width="80"
			>
			<template>
				<el-button size="mini" type="danger">回退</el-button>
			</template>
		</el-table-column>
	  </el-table>
					</div>
				<div  style="width: 500px;margin: 0 auto">
				<el-form ref="form" :model="form" label-width="200px" size="mini">
  <el-form-item label="dnspod账号">
    <el-radio-group v-model="form.Supplier">
      <el-radio-button label="易名中国" ></el-radio-button>
      <el-radio-button label="AWS"></el-radio-button>
    </el-radio-group>
  </el-form-item>
				</el-form>
				</div>
			</div>
			<div v-if="active == 2" style="width: 500px;margin: 0 auto">
				<div class="tip">
					<p>管理
1、域名剩余30天，自动邮件出来【采购负责跟进是否续费】
2、自动拉取备案信息（备案号、备案主体）、时间（注册时间、到期时间）、域名状态默认为“正常使用”
3、不续费域名处理
仅采购有权限：
勾选需要删除的域名、批量删除
开发：域名状态字段变更为待注销备案、查到备案注销后自动同步至已删除表单</p>
					<p>证书剩余30天，自动邮件出来【采购负责跟进是否续费】</p>
				</div>

			</div>
		</div>
		<div style="border-top: 1px solid #EBEEF5">
			<div style="margin:0 auto;width:200px">
				<el-button style="margin-top: 12px" @click="upx" v-if="active != 0">上一步</el-button>
				<el-button style="margin-top: 12px" @click="next" type="primary">提交</el-button>
			</div>
		</div>
	</el-card>
</template>

<script>
export default {
    name:"dorderdns",
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        	active: 0,
			form: {
			  name: '',
				region1:'极光网络',
			  region: '国内',
			  recom: '易名中国',
			  Supplier:'易名中国',
			  type: [],
			  isassigndomain: '否',
			  desc: ''
			},
        };
    },
    methods: {
		next() {
			if (this.active++ > 2) this.active = 0;
		},
		upx(){
			this.active = this.active - 1
		},
    	goBack() {
			this.$router.back() //回退到上一级路由
		}
    }
}
</script>
<style>
.tip{
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
}

</style>
