import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state={
    unread:[
        {date:'2019-07-10 15:38:25',content:'这是一条系统的消息',ptype:'API'},
        {date:'2019-07-10 15:38:24',content:'这是一条系统的消息',ptype:'系统'},
        {date:'2019-07-10 15:38:23',content:'这是一条系统的消息',ptype:'API'},
        {date:'2019-07-10 15:38:22',content:'这是一条系统的消息',ptype:'系统'},
        {date:'2019-07-10 15:38:22',content:'这是一条系统的消息',ptype:'工单'},
    ],
};
const getters={
    runread(state){
        return state.unread
    }
};
const mutations={
    dunread(state,index){
        console.log('store',index,state.unread)
        Vue.delete(state.unread,index)
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
})
