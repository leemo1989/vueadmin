<template>
    <div>
        <el-row type="flex">
            <el-col :span="6" class="shadow">
                <el-col :span="8" style="background: deepskyblue;" class="vitem">
                    <i class="fa fa-user fa-5x"></i>
                </el-col>
                <el-col :span="16" style="padding-left:15px">
                    <h2>作业执行次数</h2>
                    <b>41,452次</b>
                </el-col>
            </el-col>
            <el-col :span="6" class="shadow">
                <el-col :span="8" style="background: green;" class="vitem">
                    <i class="fa fa-bar-chart fa-5x"></i>
                </el-col>
                <el-col :span="16" style="padding-left:15px">
                    <h2>作业执行次数</h2>
                    <b>41,452次</b>
                </el-col>
            </el-col>
            <el-col :span="6" class="shadow">
                <el-col :span="8" style="background: red;" class="vitem">
                    <i class="fa fa-bell-o fa-5x"></i>
                </el-col>
                <el-col :span="16" style="padding-left:15px">
                    <h2>作业执行次数</h2>
                    <b>41,452次</b>
                </el-col>
            </el-col>
            <el-col :span="6" class="shadow">
                <el-col :span="8" style="background: rebeccapurple;" class="vitem">
                    <i class="fa fa-bookmark-o fa-5x"></i>
                </el-col>
                <el-col :span="16" style="padding-left:15px">
                    <h2>作业执行次数</h2>
                    <b>41,452次</b>
                </el-col>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px" type="flex">
            <el-col :span="12">
                <el-card shadow="always" style="margin-right:15px;">
                    <div slot="header">
                        <span>渠道监控</span>
                        <el-button style="float:right;padding:3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div id="t1" style="height: 250px;width: 100%">

                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="always" style="margin-right:15px;">
                    <div slot="header">
                        <span>应用性能监控</span>
                        <el-button style="float:right;padding:3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div id="t2" style="height: 250px;width: 100%">

                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
            <ve-line :data="data1"></ve-line>
        </el-row>
    </div>
</template>
<script>
export default {
    name:"dashboard",
    data() {
        return {
            data1:{
                columns:['日期','注册用户','登陆用户','转换率'],
                rows:[
                    {'日期':'1/1','注册用户':1393,'登陆用户':1093,'转换率':0.32},
                    {'日期':'1/2','注册用户':1689,'登陆用户':895,'转换率':0.26},
                    {'日期':'1/3','注册用户':1444,'登陆用户':1100,'转换率':0.36},
                    {'日期':'1/4','注册用户':1859,'登陆用户':1200,'转换率':0.37},
                    {'日期':'1/5','注册用户':1859,'登陆用户':1200,'转换率':0.37},
                    {'日期':'1/6','注册用户':1859,'登陆用户':1200,'转换率':0.37},
                    ]
            },
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
			},
            option1 : {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'邮件营销',
                        type:'bar',
                        stack: '广告',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'bar',
                        stack: '广告',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'bar',
                        stack: '广告',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'搜索引擎',
                        type:'bar',
                        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine : {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'百度',
                        type:'bar',
                        barWidth : 5,
                        stack: '搜索引擎',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name:'谷歌',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                        name:'必应',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                        name:'其他',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[62, 82, 91, 84, 109, 110, 120]
                    }
                ]
            }
        }
    },
	methods:{
    	handleclick(){
    		this.$router.push('/mot')
		},

	},
	mounted(){
    	var myChart = this.$echarts.init(document.getElementById('t1'));
		myChart.setOption(this.option1);
		//
        var myChart1 = this.$echarts.init(document.getElementById('t2'));
        myChart1.setOption(this.option);
	}
}
</script>
<style>
    .shadow{
        margin-right:15px;
        height: 100px;
        padding:0;
        background: white;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border:1px solid #EBEEF5;border-radius:4px;overflow:hidden
    }
    .vitem{
        color: white;text-align: center;vertical-align: middle;line-height: 130px
    }
</style>
