<template>
    <el-row>
		<el-row>
				<el-page-header @back="goback" content="详情页面"></el-page-header>
		</el-row>
		<br>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span><b>CPU</b></span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			</div>
			<div id="t1" style="height: 300px">
					fsdfsafasfas
			</div>
		</el-card>
		<br>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span><b>内存</b></span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			</div>
			<div id="t1" style="height: 300px">
					fsdfsafasfas
			</div>
		</el-card>
	</el-row>
</template>

<script>
export default {
    name:"vdetail",
	data() {
        return {
			option : {
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					areaStyle: {}
				}]
			}
        }
    },
	methods:{
    	goback(){
    		this.$router.back() //回退到上一级路由
		},
	},
	mounted(){
    	var myChart = this.$echarts.init(document.getElementById('t1'));
		myChart.setOption(this.option);
	}
}
</script>
<style>

</style>
