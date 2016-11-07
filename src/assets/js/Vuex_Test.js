import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  // 初始状态
  state: {
    count: 0
  },
  // 状态改变
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    // auto: function(state){
    //   setInterval(function(){
    //     state.count++;
    //   },1000)
    // }
    autoIncrement: state => setInterval(() => state.count++,1000)
  }
});

module.exports = store;
