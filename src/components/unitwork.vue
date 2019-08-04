<template>
    <div>
        <el-card >
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="单元名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="单元类型">
                    <el-radio-group v-model="form.resource">
                      <el-radio-button label="命令行操作"></el-radio-button>
                      <el-radio-button label="文件分发"></el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="选择IP">
                    <el-tree
                      :data="data"
                      show-checkbox
                      default-expand-all
                      node-key="id"
                      ref="tree"
                      highlight-current
                      :props="defaultProps">
                    </el-tree>
                  </el-form-item>
                  <el-form-item label="执行用户">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="root" value="shanghai"></el-option>
                      <el-option label="yhserver" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">运行</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"unitwork",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style>


</style>
