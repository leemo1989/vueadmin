<template>
    <div class="bd">
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
    </div>
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
	display: flex;
}
.treeinfo{
	flex:1 1 180px;
	min-height: 500px;
	border-right:1px solid rgb(208, 213, 215)
}
.tinfo{
	flex:1 1 auto;
	margin-left:20px
}
</style>
