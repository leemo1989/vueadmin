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
  <el-form-item label="区域">
    <el-radio-group v-model="form.region">
      <el-radio-button label="国内" ></el-radio-button>
      <el-radio-button label="海外"></el-radio-button>
    </el-radio-group>
  </el-form-item>

				  <el-form-item label="业务线">
					<el-select v-model="form.region1" placeholder="请选择注册公司">
					  <el-option label="37游戏" value="shanghai"></el-option>
					  <el-option label="37游戏手游" value="beijing"></el-option>
						<el-option label="37手游" value="beijing"></el-option>
						<el-option label="极光网络" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
  <el-form-item label="业务用途">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
				  <el-form-item label="是否指定域名">
					<el-radio-group v-model="form.isassigndomain">
					  <el-radio-button label="是" ></el-radio-button>
					  <el-radio-button label="否"></el-radio-button>
					</el-radio-group>
				  </el-form-item>
				  <el-form-item label="域名" v-if="form.isassigndomain == '是'">
					<el-input v-model="form.name"></el-input>
				  </el-form-item>
				  <el-form-item label="数量" v-if="form.isassigndomain == '否'">
					<el-input v-model="form.name" type="number"></el-input>
				  </el-form-item>
				  <el-form-item label="是否备案" v-if="form.region == '国内'">
					<el-radio-group v-model="form.region">
					  <el-radio-button label="是" ></el-radio-button>
					  <el-radio-button label="否"></el-radio-button>
					</el-radio-group>
				  </el-form-item>
				  <el-form-item label="备案主体" v-if="form.region == '国内'">
					<el-select v-model="form.region" placeholder="请选择注册公司">
					  <el-option label="易名中国" value="shanghai"></el-option>
					  <el-option label="美橙互联" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
				  <el-form-item label="dns账号">
					<el-select v-model="form.region" placeholder="请选择注册公司">
					  <el-option label="易名中国" value="shanghai"></el-option>
					  <el-option label="美橙互联" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
				  <el-form-item label="dns套餐">
					<el-select v-model="form.region" placeholder="请选择注册公司">
					  <el-option label="易名中国" value="shanghai"></el-option>
					  <el-option label="美橙互联" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
  <el-form-item label="业务负责人">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="运维负责人">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
				  <el-form-item label="采购原因">
					<el-input type="textarea" v-model="form.desc"></el-input>
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

				  <el-form-item label="购买账号">
					<el-select v-model="form.region" placeholder="请选择注册公司">
					  <el-option label="易名中国" value="shanghai"></el-option>
					  <el-option label="美橙互联" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
				  <el-form-item label="主体">
					<el-select v-model="form.region" placeholder="请选择注册公司">
					  <el-option label="易名中国" value="shanghai"></el-option>
					  <el-option label="美橙互联" value="beijing"></el-option>
					</el-select>
				  </el-form-item>
				</el-form>
				</div>
			</div>
			<div v-if="active == 2" style="width: 500px;margin: 0 auto">
				<div class="tip">
					<p>这里展示购买结果汇总，失败或者正确后台返回信息都在这里，方便开发后续查找问题和其他问题排除</p>
					<p>巴巴拉拉拉拉拉拉啊拉</p>
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
    name:"dorderd",
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
