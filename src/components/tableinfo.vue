<template>
    <div>
	  <el-table :data="items"  v-loading="serverTableLoading" size="mini">
		<el-table-column
		  prop="l_titie"
		  label="作业名称"
		  >
		</el-table-column>
		<el-table-column
		  prop="appli_user"
		  label="创建人"
		  >
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="作业标签"
		  >
		</el-table-column>
		<el-table-column
		  prop="log_state"
		  label="作业模式"
		  >
			<template slot-scope="scope">
				<el-tag v-if="scope.row.log_state == 0"  size="mini">通过</el-tag>
				<el-tag v-if="scope.row.log_state == 1" type="danger" size="mini">拒绝</el-tag>
                <el-tag v-if="scope.row.log_state != 0 && scope.row.log_state != 1" type="warning" size="mini">等待审核</el-tag>
			</template>
		</el-table-column>
		<el-table-column
		  prop="log_state"
		  label="操作"
			>
			<template slot-scope="scope">
				<el-button size="mini" >运行</el-button>
                <el-button size="mini" type="primary">编辑/查看</el-button>
				<el-button size="mini" type="danger" @click="tdelete(scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	  </el-table>
    </div>
</template>

<script>
    import Vue from 'vue'
export default {
    name:"Tableinfo",
    //props:['items'],
    data() {
        return {
			items:[{"up_name": "desktop.ini", "project_name": "\u5e7b\u57ce", "up_type": "down1", "l_tip": "", "up_out": "innet", "up_key": "", "up_md5": "9e36cc3537ee9ee1e3b10fa4e761045b", "rev_time": "2019-06-11 14:34:24", "new_fname": "1559814902_desktop.ini", "appli_user": "wanglei", "log_state": 2, "appli_time": "2019-06-06 17:55:03", "l_titie": "test", "rev_user": "kejiejie", "up_url": "", "id": 455, "up_eem": ""}, {"up_name": "201905302027_ahys_banshu1_1.0.16_999_2930.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5cd0f2b2166d40af614f7ba0dbe96b68", "rev_time": "2019-05-30 21:15:45", "new_fname": "1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-30 21:15:16", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530-2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html", "id": 449, "up_eem": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html"}, {"up_name": "20190530ahys_banshu1_1.0.16_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5acb8eef5e86c1d7ec1b739b48117bb8", "rev_time": "2019-05-30 14:03:18", "new_fname": "1559191526_20190530ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-30 12:48:45", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html", "id": 448, "up_eem": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html"}, {"up_name": "sc01_ahys_banshu1_1.0.16_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "66c2064a736b5439b17bd030ba960a02", "rev_time": "2019-05-27 21:12:46", "new_fname": "1558962484_sc01_ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-27 21:08:19", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527-2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html", "id": 443, "up_eem": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html"}, {"up_name": "20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "03e0b5501fcedb3fc439df92366105d2", "rev_time": "2019-05-27 20:11:19", "new_fname": "1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-27 20:09:48", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html", "id": 442, "up_eem": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html"}, {"up_name": "20190510173354_Unity-iPhone_syjl2019.ipa", "project_name": "\u5e7b\u60f3\u897f\u6e38", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "4c7a51fd2984519ebf7e9ffa61394d3d", "rev_time": "2019-05-10 18:04:59", "new_fname": "1557482528_20190510173354_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "2019-05-10 18:02:19", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html", "id": 434, "up_eem": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html"}, {"up_name": "20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "7d5b3e39c9f83f4056beb8be76505fbc", "rev_time": "2019-05-10 16:35:51", "new_fname": "1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 16:35:27", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510-3", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html", "id": 433, "up_eem": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html"}, {"up_name": "2019_ahys_1.0.15_999.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "558c46c81d83cf3c160d0df1d03ce682", "rev_time": "2019-05-10 11:24:08", "new_fname": "1557458603_2019_ahys_1.0.15_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 11:23:31", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510\u4fee\u6539", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html", "id": 432, "up_eem": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html"}, {"up_name": "20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "project_name": "\u6697\u9ed1\u52c7\u58eb", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "a7a23f6b0525fb285ce7520a8b67a279", "rev_time": "2019-05-10 10:33:18", "new_fname": "1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "2019-05-10 10:30:45", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html", "id": 431, "up_eem": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html"}, {"up_name": "20190430150624_Unity-iPhone_syjl2019.ipa", "project_name": "\u5e7b\u60f3\u897f\u6e38", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "588fb45b3b9ac07572305f56803b1202", "rev_time": "2019-04-30 18:11:36", "new_fname": "1556618109_20190430150624_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "2019-04-30 17:57:26", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "rev_user": "kejiejie", "up_url": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html", "id": 427, "up_eem": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html"}],
			serverTableLoading:false,
        };
    },
	methods:{
        tdelete(index){
            this.$confirm('确认是否删除该作业？','',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                Vue.delete(this.items,index)
                this.$message({message:'删除成功',type:'success'})
            })
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
	}
}
</script>
<style>

</style>
