<template>
	<el-card>
	  <div slot="header">
		<el-page-header @back="goBack" content="详情页面">
		</el-page-header>
	  </div>
		<el-steps :active="active" finish-status="success" align-center>
		  <el-step title="步骤 1">
			  test1
		  </el-step>
		  <el-step title="步骤 2">
			  test2
		  </el-step>
		  <el-step title="步骤 3"></el-step>
		</el-steps>
		<div style="margin:0 auto;width:600px;margin-top:50px">
			<div v-if="active == 0">
				<el-form ref="form" :model="form" label-width="200px" size="mini">
  <el-form-item label="区域">
    <el-radio-group v-model="form.region">
      <el-radio-button label="国内" ></el-radio-button>
      <el-radio-button label="海外"></el-radio-button>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="业务负责人">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="运维负责人">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
				  <el-form-item label="业务线">
					<el-select v-model="form.region1" placeholder="请选择注册公司">
					  <el-option label="37游戏" value="shanghai"></el-option>
					  <el-option label="37游戏手游" value="beijing"></el-option>
						<el-option label="37手游" value="beijing"></el-option>
						<el-option label="极光网络" value="beijing"></el-option>
					</el-select>
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
				  <el-form-item label="购买证书">
					<el-radio-group v-model="form.region">
					  <el-radio-button label="是" ></el-radio-button>
					  <el-radio-button label="否"></el-radio-button>
					</el-radio-group>
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
				  <el-form-item label="采购原因">
					<el-input type="textarea" v-model="form.desc"></el-input>
				  </el-form-item>
				  <!--el-form-item>
					<el-button type="primary" @click="onbuy">立即申请</el-button>
					<el-button @click="dialogVisible1 = false">取消</el-button>
				  </el-form-item-->
				</el-form>
			</div>
			<div v-if="active == 1">
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
			<div v-if="active == 2">
				这里展示购买结果汇总，失败或者正确后台返回信息都在这里，方便开发后续查找问题和其他问题排除
			</div>
		</div>
		<div style="border-top: 1px solid #EBEEF5">
			<div style="margin:0 auto;width:200px">
				<el-button style="margin-top: 12px" @click="upx" v-if="active != 0">上一步</el-button>
				<el-button style="margin-top: 12px" @click="next">下一步</el-button>
			</div>
		</div>
	</el-card>
</template>

<script>
export default {
    name:"dorderd",
    data() {
        return {
        	active: 0,
			radio1:'极光网络',
			form: {
			  name: '',
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

</style>
