<template>
    <el-card v-loading="loading"
		element-loading-text="正在购买中"
			 element-loading-background="rgba(0, 0, 0, 0.8)"
			 element-loading-spinner="el-icon-loading"
	>
		<!--内容-->
        <el-button type="primary" @click="handlebuy">申请域名</el-button>
        <el-button>导出</el-button>
        <el-button type="primary" style="float:right">显示框</el-button>
        <br><br>
		<el-input
				size="mini"
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
		  label="域名">
		</el-table-column>
		<el-table-column
		  prop="l_titie"
		  label="注册/到期时间"
		  >
			<template slot-scope="scope">
                2017-10-25/2019-11-25
			</template>
		</el-table-column>
		<el-table-column
		  prop="appli_user"
		  label="剩余天数"
		  >
			<template slot-scope="scope">
                <el-tag v-if="scope.row.project_name == '37.com'" type="danger" size="mini">32</el-tag>
                <span v-else>68</span>
			</template>
		</el-table-column>
		<el-table-column
		  prop="appli_time"
		  label="备案公司"
		  >
		</el-table-column>

		<el-table-column
		  prop="rev_user"
		  label="备案号"
		  >
		</el-table-column>
		<el-table-column
		  prop="rev_time"
		  label="注册公司"
		  >
		</el-table-column>
		<el-table-column
		  prop="rev_time"
		  label="域名解析商帐号"
		  >
			<template slot-scope="scope">
                gndnspod@37.com
			</template>
		</el-table-column>

		<el-table-column
		  prop="log_state"
		  label="网站状态码"
          width="100"
		  >
			<template slot-scope="scope">
				<el-tag v-if="scope.row.log_state == 0"  size="mini" type="success">200</el-tag>
				<el-tag v-if="scope.row.log_state == 1" type="danger" size="mini">404</el-tag>
                <el-tag v-if="scope.row.log_state == 2" type="warning" size="mini">无法连接</el-tag>
			</template>
		</el-table-column>
		<el-table-column
		  prop="l_tip"
		  label="更新时间"
		  >
			<template slot-scope="scope">
                1分钟前
			</template>
		</el-table-column>
		<el-table-column
		  prop="log_state"
		  label="操作"
		  width="150"
			>
			<template slot-scope="scope">
				<el-button size="mini" v-if="scope.row.appli_time == ''" @click="onedit(scope.row)">编辑</el-button>
				<el-button size="mini" type="danger" @click="ondel">删除</el-button>
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
		<el-dialog
		  title="编辑域名"
		  :modal-append-to-body="false"
		  :visible.sync="dialogVisible2"
		  width="30%">
			<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="解析商">
				<el-select v-model="form.region" placeholder="请选择DNS公司">
				  <el-option label="DNSpod" value="shanghai"></el-option>
				  <el-option label="美橙互联xx" value="beijing"></el-option>
				</el-select>
			  </el-form-item>
			  <el-form-item label="是否续费">
				<el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="重要性">
				<el-radio-group v-model="radio2" size="medium">
				  <el-radio-button label="高" ></el-radio-button>
				  <el-radio-button label="中"></el-radio-button>
				  <el-radio-button label="低"></el-radio-button>
				</el-radio-group>
			  </el-form-item>
			  <el-form-item label="是否使用">
				<el-radio-group v-model="radio23" size="medium">
				  <el-radio-button label="使用" ></el-radio-button>
				  <el-radio-button label="未使用"></el-radio-button>
				  <el-radio-button label="其他"></el-radio-button>
				</el-radio-group>
			  </el-form-item>
			  <!--el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
				  <el-radio label="线上品牌商赞助"></el-radio>
				  <el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			  </el-form-item-->
			  <el-form-item>
				<el-button type="primary" @click="dialogVisible2 = false">更新</el-button>
				<el-button @click="dialogVisible2 = false">取消</el-button>
			  </el-form-item>
			</el-form>
		</el-dialog>

		<el-dialog
		  title="申请域名"
		  :modal-append-to-body="false"
		  :visible.sync="dialogVisible1"
		  width="30%">
			<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="域名">
				<el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="分组">
				  <el-cascader
					v-model="value"
					:options="options"
					@change="handleChange"></el-cascader>
			  </el-form-item>
			  <el-form-item label="注册公司">
				<el-select v-model="form.region" placeholder="请选择注册公司">
				  <el-option label="易名中国" value="shanghai"></el-option>
				  <el-option label="美橙互联" value="beijing"></el-option>
				</el-select>
			  </el-form-item>
			  <el-form-item label="有效时间">
				<el-col :span="11">
				  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
			  </el-form-item>
			  <el-form-item label="购买证书">
				<el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <!--el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
				  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				  <el-checkbox label="地推活动" name="type"></el-checkbox>
				  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
				  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
				  <el-radio label="线上品牌商赞助"></el-radio>
				  <el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			  </el-form-item-->
			  <el-form-item label="备注">
				<el-input type="textarea" v-model="form.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="onbuy">立即申请</el-button>
				<el-button @click="dialogVisible1 = false">取消</el-button>
			  </el-form-item>
			</el-form>
		</el-dialog>
    </el-card>
</template>

<script>
export default {
    name:"domain",
    data() {
        return {
			items:[
			    {"up_name": "desktop.ini", "project_name": "37.com", "up_type": "down1", "l_tip": "", "up_out": "innet", "up_key": "", "up_md5": "9e36cc3537ee9ee1e3b10fa4e761045b", "rev_time": "美橙互联", "new_fname": "1559814902_desktop.ini", "appli_user": "2019-11-25", "log_state": 2, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "2013-11-25", "rev_user": "沪ICP备17030769号-5", "up_url": "", "id": 455, "up_eem": ""},
                {"up_name": "201905302027_ahys_banshu1_1.0.16_999_2930.apk", "project_name": "37api.cn", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5cd0f2b2166d40af614f7ba0dbe96b68", "rev_time": "美橙互联", "new_fname": "1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530-2", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html", "id": 449, "up_eem": "https://download.01234.com.cn:8003/1559222112_201905302027_ahys_banshu1_1.0.16_999_2930.html"},
                {"up_name": "20190530ahys_banshu1_1.0.16_999.apk", "project_name": "37wan.ac.cn", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "5acb8eef5e86c1d7ec1b739b48117bb8", "rev_time": "美橙互联", "new_fname": "1559191526_20190530ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050530", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html", "id": 448, "up_eem": "https://download.01234.com.cn:8003/1559191526_20190530ahys_banshu1_1.0.16_999.html"},
                {"up_name": "sc01_ahys_banshu1_1.0.16_999.apk", "project_name": "37wan.gx.cn", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "66c2064a736b5439b17bd030ba960a02", "rev_time": "美橙互联", "new_fname": "1558962484_sc01_ahys_banshu1_1.0.16_999.apk", "appli_user": "yuzhengxiong", "log_state": 1, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527-2", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html", "id": 443, "up_eem": "https://download.01234.com.cn:8003/1558962484_sc01_ahys_banshu1_1.0.16_999.html"},
                {"up_name": "20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "project_name": "d84a43bc.com", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "03e0b5501fcedb3fc439df92366105d2", "rev_time": "美橙互联", "new_fname": "1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050527", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html", "id": 442, "up_eem": "https://download.01234.com.cn:8003/1558958762_20190527185128_sc01_ahys_banshu1_1.0.16_999_2019527185323.html"},
                {"up_name": "20190510173354_Unity-iPhone_syjl2019.ipa", "project_name": "37wan.cq.cn", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "4c7a51fd2984519ebf7e9ffa61394d3d", "rev_time": "美橙互联", "new_fname": "1557482528_20190510173354_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u7248\u7f72\u530520190222_2", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html", "id": 434, "up_eem": "https://download.01234.com.cn:8003/1557482528_20190510173354_Unity-iPhone_syjl2019.html"},
                {"up_name": "20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "project_name": "6711.ws", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "7d5b3e39c9f83f4056beb8be76505fbc", "rev_time": "美橙互联", "new_fname": "1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "上海硬通网络科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510-3", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html", "id": 433, "up_eem": "https://download.01234.com.cn:8003/1557477315_20190510160926_sc01_ahys_1.0.15_999_2019510160837.html"},
                {"up_name": "2019_ahys_1.0.15_999.apk", "project_name": "gm99.asia", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "558c46c81d83cf3c160d0df1d03ce682", "rev_time": "美橙互联", "new_fname": "1557458603_2019_ahys_1.0.15_999.apk", "appli_user": "yuzhengxiong", "log_state": 1, "appli_time": "三七互娱（上海）科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510\u4fee\u6539", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html", "id": 432, "up_eem": "https://download.01234.com.cn:8003/1557458603_2019_ahys_1.0.15_999.html"},
                {"up_name": "20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "project_name": "gm99.com.cn", "up_type": "down1", "l_tip": "", "up_out": "allnet", "up_key": "", "up_md5": "a7a23f6b0525fb285ce7520a8b67a279", "rev_time": "美橙互联", "new_fname": "1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.apk", "appli_user": "yuzhengxiong", "log_state": 0, "appli_time": "上海硬通网络科技有限公司", "l_titie": "\u6697\u9ed1\u52c7\u58eb\u7248\u7f72\u53050510", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html", "id": 431, "up_eem": "https://download.01234.com.cn:8003/1557455426_20190510095953_sc01_ahys_banshu1_1.0.15_999_201951095914.html"},
                {"up_name": "20190430150624_Unity-iPhone_syjl2019.ipa", "project_name": "gmthai.net.cn", "up_type": "down2", "l_tip": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "up_out": "allnet", "up_key": "com.yh.syjl.001", "up_md5": "588fb45b3b9ac07572305f56803b1202", "rev_time": "美橙互联", "new_fname": "1556618109_20190430150624_Unity-iPhone_syjl2019.ipa", "appli_user": "xiaolirong", "log_state": 0, "appli_time": "上海硬通网络科技有限公司", "l_titie": "\u795e\u4fd1\u964d\u4e34IOS\u4e3b\u5e72\u4f53\u9a8c\u530520190430", "rev_user": "沪ICP备17030769号-5", "up_url": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html", "id": 427, "up_eem": "https://download.01234.com.cn:8003/1556618109_20190430150624_Unity-iPhone_syjl2019.html"}],
			keyword:'title',
			pagenum:1,
			radio2:'高',
			radio23:'未使用',
			shownum:10,
			allcount:152,
			searchContent:'',
			loading: false,
			serverTableLoading:false,
			selectinfo:[],
			dialogTableVisible:false,
			dialogVisible1: false,
			dialogVisible2: false,
			showtitle:'',
			showq:'',
			value:[],
			plist:[{"text": "\u5e7b\u57ce", "value": "\u5e7b\u57ce"}, {"text": "\u62c9\u7ed3\u5c14", "value": "\u62c9\u7ed3\u5c14"}, {"text": "\u5e7b\u60f3\u897f\u6e38", "value": "\u5e7b\u60f3\u897f\u6e38"}, {"text": "\u6697\u9ed1\u52c7\u58eb", "value": "\u6697\u9ed1\u52c7\u58eb"}],
			selectproject:[],
			form: {
			  name: '',
			  region: '易名中国',
			  date1: '',
			  date2: '',
			  delivery: false,
			  type: [],
			  resource: '',
			  desc: ''
			},
        options: [{
          value: 'zhinan',
          label: '37游戏',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '极光游戏',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
        };
    },
	methods:{
    	ondel(){
			this.$confirm('此操作将会一并注销【域名主体】, 是否继续?', '提示', {
			  confirmButtonText: '确定',
			  cancelButtonText: '取消',
			  type: 'warning'
			}).then(() => {
			  this.$message({
				type: 'success',
				message: '删除成功!'
			  });
			})
		},
    	onedit(){
			this.dialogVisible2 = true
		},
    	onbuy(){
    		this.dialogVisible1=false
			this.loading = true
			setTimeout(() => {
			  this.loading = false;
				this.$message({
				  message: '申请成功',
				  type: 'success'
				});
				this.items.unshift({"up_name": "desktop.ini", "project_name":this.form.name, "up_type": "down1", "l_tip": "", "up_out": "innet", "up_key": "", "up_md5": "9e36cc3537ee9ee1e3b10fa4e761045b", "rev_time":this.form.region, "new_fname": "1559814902_desktop.ini", "appli_user": "2019-11-25", "log_state": 2, "appli_time": "", "l_titie": "2013-11-25", "rev_user": "", "up_url": "", "id": 455, "up_eem": ""})
			}, 2000);
		},
    	handlebuy(){
    		this.dialogVisible1 = true
		},
	    filterTag(k){
	        this.selectproject = []
            for(y in k){
                console.log(k[y])
                this.selectproject.push(k[y])
            }
            this.getnewinifo()
        },
		tdown(info){
			console.log(info)
			//window.location.href=info.file_link
			$.getJSON("/service/ser_log/",{id:info.id,query:'yes'},function(data){
                console.log(data)
				info.log_state= data.log_state
				info.rev_time=data.rev_time
       		})
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
