<template>
  <el-table :data="data" size="mini">
    <el-table-column
      prop="date"
      label="日期"
		width="200">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容"
      >
    </el-table-column>
    <el-table-column
      prop="ptype"
      label="类型"
      :filters="[{text:'API',value:'API'},{text:'系统',value:'系统'},{text:'工单',value:'工单'}]"
      :filter-method="filtertype"
      >
    </el-table-column>
    <el-table-column
		width="180"
      prop="address"
      label="操作"
      >
		<template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handlegmdel(scope.$index,scope.row,'recover')" v-if="ptype == 'unread' || ptype == 'trash'">
                <slot>标记已读</slot>
            </el-button>
            <el-button size="mini" type="danger" @click="handlegmdel(scope.$index,scope.row,'del')" v-if="ptype == 'unread'">删除</el-button>
            <el-button size="mini" type="danger" @click="handlegmdel(scope.$index,scope.row,'del')" v-if="ptype == 'hasread'">删除</el-button>
		</template>
    </el-table-column>
  </el-table>
</template>
<script>
import Vue from 'vue'
export default {
    name: "messagetable",
    props:['data','ptype'],
    methods:{
        filtertype(value,row){
            return row.ptype === value
        },
        handlegmdel(index,row,action){
            this.$emit('actionnow',row,action)
            if(this.ptype == 'unread'){
                this.$store.commit('dunread',index)
            }else{
                Vue.delete(this.data,index)
            }
        }
    }
}
</script>
