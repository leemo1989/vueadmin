<template>
    <div>
		<el-row style="margin-bottom: 10px">
			<el-card shadow="never">
				<div slot="header">
					<span><b>信息汇总</b></span>
					<el-button icon="el-icon-setting" style="float: right; padding: 3px 0" type="text">设置</el-button>
				</div>
				<div>
					<p>总计数量：XX台</p>
					<p>告警：xx台</p>
					<p>关联监控模板：<el-tag>3V3监控</el-tag> <el-tag>战斗服监控</el-tag> <el-tag>基础硬件监控</el-tag></p>
					<p>关联告警模板：<el-tag>高负载</el-tag> <el-tag>内网延迟报警</el-tag> <el-tag>基本报警</el-tag></p>
				</div>
			</el-card>
		</el-row>
		<!--内容-->
		<el-input size="mini"
		  v-model="searchContent"
		  placeholder="请选择对应搜索类目后，输入搜索内容"
		  >
			<el-select v-model="keyword" slot="prepend" placeholder="查询项" style="width:120px">
				<el-option value="title" label="标题"></el-option>
			</el-select>
			<el-button @click="query" slot="append" icon="el-icon-search"></el-button>
		</el-input>

	  <el-table :data="items"  v-loading="serverTableLoading" size="mini" @filter-change="filterTag">
		<el-table-column
		  prop="project_name"
          :filters="plist"
		  label="IP">
			<template slot-scope="scope">
				192.168.2.5
			</template>
		</el-table-column>
		<el-table-column
		  prop="l_titie"
		  label="CPU"
		  >
			<template slot-scope="scope">
				<i class="el-icon-check" type="success"></i>
			</template>
		</el-table-column>
		<el-table-column
		  prop="appli_user"
		  label="内存"
		  >
			<template slot-scope="scope">
				<el-tag size="mini">42%</el-tag>
			</template>
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="硬盘"
		  >
			<template slot-scope="scope">
				<el-tag type="warning" size="mini">75%</el-tag>
			</template>
		</el-table-column>

		<el-table-column
		  prop="rev_user"
		  label="在线人数"
		  >
			<template slot-scope="scope">
				<el-tag size="mini">1200</el-tag>
			</template>
		</el-table-column>
		<el-table-column
		  prop="rev_time"
		  label="内网波动"
		  >
			<template slot-scope="scope">
				<el-button circle icon="el-icon-close" size="mini" type="danger"></el-button>
			</template>
		</el-table-column>
		<el-table-column
		  prop="log_state"
		  label="服务状态"
		  >
			<template slot-scope="scope">
				<el-tag v-if="scope.row.log_state == 0"  size="mini">正常</el-tag>
				<el-tag v-if="scope.row.log_state == 1" type="danger" size="mini">拒绝</el-tag>
                <el-tag v-if="scope.row.log_state != 0 && scope.row.log_state != 1" type="danger" size="mini">宕机</el-tag>
			</template>
		</el-table-column>
		<el-table-column
		  prop="log_state"
		  label="操作"
		  width="100"
			>
			<template slot-scope="scope">
				<el-button size="mini" @click="catinfo">详情</el-button>
			</template>
		</el-table-column>
	  </el-table>
		<div style="margin-top:10px;text-align:center">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
			:current-page="pagenum"
			:page-sizes="[10,20,100,200]"
			:page-size="shownum"
			layout="total,sizes,prev,pager,next,jumper"
			:total="allcount">
			</el-pagination>
		</div>
    </div>
</template>

<script>
export default {
    name:"mot",
    data() {
        return {
			items:[{"up_name": "desktop.ini", "project_name": "\u5e7b\u57ce", "up_type": "down1", "l_tip": "", "up_out": "innet", "up_key": "", "up_md5": "9e36cc3537ee9ee1e3b10fa4e761045b", "rev_time": "2019-06-11 14:34:24", "new_fname": "1559814902_desktop.ini", "appli_user": "wanglei", "log_state": 2, "appli_time": "2019-06-06 17:55:03", "l_titie": "test", "rev_user": "kejiejie", "up_url": "", "id": 455, "up_eem": ""}, {"up_name": "201905302027_ahys_banshu1_1.0.16_999_2930.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5cd0f2b2166d40af614f7ba0dbe96b68", "rev_time": "2019-05-30 21:15:45", "new_fname": "1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-30 21:15:16", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530-2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html", "id": 449, "up_eem": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html"}, {"up_name": "20190530ahys_banshu1_1.0.16_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5acb8eef5e86c1d7ec1b739b48117bb8", "rev_time": "2019-05-30 14:03:18", "new_fname": "1559191526_20190530ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-30 12:48:45", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html", "id": 448, "up_eem": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html"}, {"up_name": "sc01_ahys_banshu1_1.0.16_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "66c2064a736b5439b17bd030ba960a02", "rev_time": "2019-05-27 21:12:46", "new_fname": "1558962484_sc01_ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-27 21:08:19", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527-2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html", "id": 443, "up_eem": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html"}, {"up_name": "20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "03e0b5501fcedb3fc439df92366105d2", "rev_time": "2019-05-27 20:11:19", "new_fname": "1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-27 20:09:48", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html", "id": 442, "up_eem": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html"}, {"up_name": "20190510173354_Unity-iPhone_syjl2019.ipa", "project_name": "\u5e7b\u60f3\u897f\u6e38", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "4c7a51fd2984519ebf7e9ffa61394d3d", "rev_time": "2019-05-10 18:04:59", "new_fname": "1557482528_20190510173354_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "2019-05-10 18:02:19", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html", "id": 434, "up_eem": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html"}, {"up_name": "20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "7d5b3e39c9f83f4056beb8be76505fbc", "rev_time": "2019-05-10 16:35:51", "new_fname": "1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 16:35:27", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510-3", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html", "id": 433, "up_eem": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html"}, {"up_name": "2019_ahys_1.0.15_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "558c46c81d83cf3c160d0df1d03ce682", "rev_time": "2019-05-10 11:24:08", "new_fname": "1557458603_2019_ahys_1.0.15_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 11:23:31", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510\u4fee\u6539", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html", "id": 432, "up_eem": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html"}, {"up_name": "20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "a7a23f6b0525fb285ce7520a8b67a279", "rev_time": "2019-05-10 10:33:18", "new_fname": "1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 10:30:45", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html", "id": 431, "up_eem": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html"}, {"up_name": "20190430150624_Unity-iPhone_syjl2019.ipa", "project_name": "\u5e7b\u60f3\u897f\u6e38", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "588fb45b3b9ac07572305f56803b1202", "rev_time": "2019-04-30 18:11:36", "new_fname": "1556618109_20190430150624_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "2019-04-30 17:57:26", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html", "id": 427, "up_eem": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html"}],
			keyword:'title',
			pagenum:1,
			shownum:10,
			allcount:152,
			searchContent:'',
			serverTableLoading:false,
			selectinfo:[],
			dialogTableVisible:false,
			showtitle:'',
			showq:'',
			plist:[{"text": "\u5e7b\u57ce", "value": "\u5e7b\u57ce"}, {"text": "\u62c9\u7ed3\u5c14", "value": "\u62c9\u7ed3\u5c14"}, {"text": "\u5e7b\u60f3\u897f\u6e38", "value": "\u5e7b\u60f3\u897f\u6e38"}, {"text": "\u6697\u9ed1\u52c7\u58eb", "value": "\u6697\u9ed1\u52c7\u58eb"}],
			selectproject:[],
        };
    },
	methods:{
	    filterTag(k){
	        this.selectproject = []
            for(y in k){
                console.log(k[y])
                this.selectproject.push(k[y])
            }
            this.getnewinifo()
        },
		catinfo(info){
			console.log(info)
			this.$router.push('/vdetail')
		},
		topen(){
			console.log(111111)
			this.$nextTick(()=>{
				$('#showerwm').html('')
				var qrcode = new QRCode(document.getElementById("showerwm"),{
					text:this.showq,
					width:150,
					height:150,
				})
			})

		},
		showqcode(info){
			this.dialogTableVisible = true
			this.showtitle=info.model_filename
			this.showq=info.file_link
			console.log(info)
		//	qrcode.clear()
		//	qrcode.makeCode('http://dfsafdf')
		},
		zf(){
			if(this.selectinfo.length == 0){
				alert("请选择文件！")
			}else{
				$("#myModal1").modal("show")
			}
		},
		handleschange(v){
			this.selectinfo=[]
			for(let p of v){
				//this.selectinfo.push(p)
				this.selectinfo.push(JSON.stringify({filemd5:p.model_filemd5,
					filepath:p.model_file,
					filename:p.model_filename,
					filesize:p.size,
					fileinlink:p.file_link,
					createtime:p.ctime
				}))
			}
			console.log(this.selectinfo)
		},
		isselect(o){
			if(o.model_on == 0){
				return true
			}else{
				return false
			}
		},
		query(){
			console.log(this.searchContent)
			this.getnewinifo()
		},
		getnewinifo(){
			let ox=this
			this.serverTableLoading = true;
			//公共查询参数
			common_queryargs={"action":"search","shownum":this.shownum,"pagenum":this.pagenum,"searchargs":this.searchContent,"selectproject":this.selectproject}
			$.getJSON("/service/ser_log/",common_queryargs,function(data){
				console.log(data)
				ox.allcount=data['allcount']
				ox.items=data['data']
				ox.serverTableLoading = false;
				ox.plist=data['plist']
			})

		},
		handleSizeChange(val){
				console.log(`每页${val}条`)
				this.shownum=val
				this.getnewinifo()
		},
		handleCurrentChange(val){
				console.log(`当前页${val}`)
				this.pagenum=val
				this.getnewinifo()
		},
	}
}
</script>
<style>

</style>
