<template>
  <div id="secondcomponent">
    <h1>第二页</h1>
    <a> written by {{ author }} </a>

    <div id="vuex">
      <h4>Vuex_Test</h4>
      <h2>{{ count1 }}</h2>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>

<script>
  var store = require('../assets/js/Vuex_Test.js');
  // 通过 store.commit 触发状态的更改
  store.commit('autoIncrement');

  export default {
    // 数据
    data() {
      return {
        author: "yangyh",
        articles: []
      }
    },

    // 在 computed (计算)属性中返回 store 的状态就行
    computed: {
      count1 () {
        return store.state.count
      }
    },

    // 组件
    components: { },
    
    // 方法
    methods: {
      increment: function () {
        console.log(store.state.count);
        store.commit('increment');
      },
      decrement: function () {
        console.log(store.state.count);
        store.commit('decrement');
      }
    }
  }
</script>

<style>
  #vuex{
    border-top: 1px solid #000;
    margin-top: 15px;
    text-align: center;
  }
  #vuex h2{
    color: green;
  }
</style>