<template>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label">
                    未读消息 <el-tag type="danger">{{unread.length}}</el-tag>
                </span>
                <messagetable :data="unread" :ptype="'unread'" @actionnow="paction"></messagetable>
            </el-tab-pane>
            <el-tab-pane label="">
                <span slot="label">
                    已读消息 <el-tag type="default">{{hasread.length}}</el-tag>
                </span>
                <messagetable :data="hasread" :ptype="'hasread'" @actionnow="paction"></messagetable>
            </el-tab-pane>
            <el-tab-pane label="">
                <span slot="label">
                    回收站 <el-tag type="default">{{trash.length}}</el-tag>
                </span>
                <messagetable :data="trash" :ptype="'trash'" @actionnow="paction">还原</messagetable>
            </el-tab-pane>
        </el-tabs>

</template>

<script>
import messagetable from '@/components/messagetable'
export default {
    name:"message",
    data() {
        return {
            unread:[],
            hasread:[
                {date:'2019-07-09 15:38:25',content:'未读消息1',ptype:'API'},
            ],
            trash:[
                {date:'2019-07-09 15:38:25',content:'删除的消息的，用来历史存储',ptype:'API'},
            ],
        };
    },
    mounted(){
      console.log(this.$store.state.unread,444)
        this.unread=this.$store.state.unread
    },
    components:{
        messagetable,
    },
    methods:{
        paction(v,ptype){
            if(ptype == 'del'){
                this.trash.push(v)
            }else{
                this.hasread.push(v)
            }
        }

    }
}
</script>
<style>

</style>
