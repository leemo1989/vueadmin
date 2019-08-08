<template>
    <div>
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-form-item label="单元名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单元类型">
          <el-radio-group v-model="form.ptype">
            <el-radio-button label="命令行操作"></el-radio-button>
            <el-radio-button label="文件分发"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="输入命令" v-if="form.ptype == '命令行操作'">
          <el-input v-model="form.cmd"></el-input>
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
          <el-select v-model="form.execuser">
            <el-option label="root" value="root"></el-option>
            <el-option label="yhserver" value="yhserver"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">运行</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
    name:"unitwork",
    data() {
      return {
        form: {
          name: '',
          execuser: 'root',
          ptype: '命令行操作',
          cmd: ''
        },
        data: [{
          id: 1,
          label: '自运营',
          children: [{
            id: 4,
            label: '战斗服集群',
            children: [{
              id: 9,
              label: '战斗服1'
            }, {
              id: 10,
              label: '战斗服2'
            }]
          }]
        }, {
          id: 2,
          label: 'IOS',
          children: [{
            id: 5,
            label: '测试服1'
          }, {
            id: 6,
            label: '测试服2'
          }]
        }, {
          id: 3,
          label: '海外',
          children: [{
            id: 7,
            label: '测试服1'
          }, {
            id: 8,
            label: '测试服2'
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
