<template>
    <el-row type="flex" class="bd">
		<div class="treeinfo">
			<el-tree
				:data="data"
				@node-click="handleclick"
			>
			</el-tree>
		</div>
		<div class="tinfo">
			<router-view></router-view>
		</div>
    </el-row>
</template>

<script>
export default {
    name:"yewu",
    data() {
        return {
        	data:[
        			{
        		label:'神魔',
				children:[{
        			label:'腾讯',
					children:[{
        				label:'APP',
					},
						{label:'DB'}
					]
				}],
			},
				{label:'时空猎人',
				children:[{
					label:'自运营',
				},{label:'腾讯IOS'}
				]
				}
			]
        };
    },
	methods:{
    	handleclick(){
    		this.$router.push('/mot')
		},
	}
}
</script>
<style>
.bd{
	background: white;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border:1px solid #EBEEF5;border-radius:4px;overflow:hidden
}
.treeinfo{
	flex:0 1 180px;
	min-height: 500px;
	//border-right:1px solid rgb(208, 213, 215)
}
.tinfo{
	flex:1 1 auto;
	margin-left:20px
}
</style>
