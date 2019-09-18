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
					<el-form-item label="主域名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="证书域名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="购买年限">
						<el-radio-group v-model="form.region">
						  <el-radio-button label="1">1年</el-radio-button>
						  <el-radio-button label="2">2年</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="公司主体">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="业务线">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="业务负责人">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="运维负责人">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="购买原因">
						<el-input v-model="form.name"></el-input>
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
  <el-form-item label="供应商">
    <el-radio-group v-model="form.Supplier">
      <el-radio-button label="易名中国" ></el-radio-button>
      <el-radio-button label="AWS"></el-radio-button>
    </el-radio-group>
  </el-form-item>
				  <el-form-item label="上传私钥">
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
				  </el-form-item>
				</el-form>
				</div>
			</div>
			<div v-if="active == 2" style="width: 500px;margin: 0 auto">
				<div class="tip">
					<p>自动拉取时间（购买、到期）、公钥、匹对私钥保存</p>
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
    name:"dorderdzs",
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
