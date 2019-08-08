<template>
    <el-row>
        <el-row style="margin-bottom: 15px">
            <el-button size="medium" type="primary" onclick="window.location.href='/fenfa/task/add/'">增加作业</el-button>
        </el-row>

        <el-tabs type="border-card">
            <el-tab-pane label="运维发布" name=""><Tableinfo></Tableinfo></el-tab-pane>
            <el-tab-pane label="故障处理" name=""><Tableinfo></Tableinfo></el-tab-pane>
            <el-tab-pane label="测试专用" name=""><Tableinfo></Tableinfo></el-tab-pane>
        </el-tabs>
    </el-row>
</template>

<script>
    import Tableinfo from '@/components/tableinfo.vue'
export default {
    name:"taskwork",
    components:{
      Tableinfo
    },
    data() {
      return {}
    },
    methods: {
    },
}
</script>
<style>


</style>
