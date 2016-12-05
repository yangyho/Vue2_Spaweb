<template>
  <div id="secondcomponent">
    <h1>跳转到第三页</h1>
    <a> written by {{ author }} </a>
    <h3>读取md文件内容</h3>
    <ul>
      <li v-for="article in articles" @click="getFileName(article.name)"><a href="#">{{article.name}}</a></li>
    </ul>
    <div class="content"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "yangyh",
        articles: [{
          name:"$get_file"
        },{
          name:"duoshuo_init"
        },{
          name:"JSONP_baidu"
        },{
          name:"temp_table"
        },{
          name:"template"
        },{
          name:"upload_file"
        },],
      }
    },
    methods:{
      // 获取md文件名
      getFileName: function(name){
        console.log(name)
      }
    },
    mounted (){
      var Remarkable = require('remarkable');
      var md = new Remarkable();
      var file = require('../assets/md/duoshuo_init.md');
      $.get(file).success(text=>{
        // console.log(text)
        $(".content").html(md.render(text).replace(/^img_01^/,"<img src='/static/img/get_file_1.png' class='img-responsive' />"))
      })
    }
  }

</script>

<style>
  body{
    font-family: '微软雅黑'
  }
  pre {
      display: block;
      padding: 9.5px;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 1.42857143;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  blockquote {
    border-left: 5px solid #ccc;
}
</style>