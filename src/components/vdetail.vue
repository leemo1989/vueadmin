<template>
    <div>
		<el-row>
				<el-page-header @back="goback" content="详情页面"></el-page-header>
				<span>uptime 17.16day|cpu load 0.04%|cpu core 24|</span>
		</el-row>

		<el-row type="flex">
			<el-card class="v1item">
				<div slot="header" class="clearfix">
				<span><b>CPU</b></span>
					<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<ve-line
					:data="chartData"
					:tooltip-visible="false"
					:settings="chartSettings"
					:legend-visible="false">
				</ve-line>
			</el-card>
			<el-card class="v1item">
				<div slot="header">
				<span><b>内存</b></span>
					<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<ve-line
					:data="chartData"
					:tooltip-visible="false"
					:settings="chartSettings"
					:legend-visible="false">
				</ve-line>
			</el-card>
			<el-card class="v1item">
				<div slot="header">
				<span><b>内存</b></span>
					<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<ve-line
					:data="chartData"
					:tooltip-visible="false"
					:settings="chartSettings"
					:legend-visible="false">
				</ve-line>
			</el-card>
		</el-row>
	</div>
</template>

<script>
export default {
    name:"vdetail",
	data() {
      this.chartSettings = {
        stack: { '用户': ['访问用户', '下单用户'] },
        area: true
      }
        return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
        }
    },
	methods:{
    	goback(){
    		this.$router.back() //回退到上一级路由
		},
	},
	mounted(){
	}
}
</script>
<style>
.el-page-header__content{font-size:14px !important;}
.v1item{
	flex:1 1 auto;
	margin-right:15px;
	//height:300px;
}
</style>
