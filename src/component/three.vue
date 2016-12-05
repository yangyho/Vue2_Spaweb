<template>
  <div id="secondcomponent">
    <!-- <h1>跳转到第三页</h1> -->
    <!-- <a> written by {{ author }} </a> -->
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
      var file = require('../assets/md/upload_file.md');
      $.get(file).success(text=>{
        // console.log(text)
        $(".content").html(md.render(text).replace(/^img_01^/,"<img src='/static/img/get_file_1.png' class='img-responsive' />"))
      })
    }
  }

</script>

<style>
.content{
  font-size: 14px;
}
.content p{
  margin: 15px 0; 
}
/* CODE
=============================================================================*/

pre, code, tt {
  font-size: 12px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
}

code, tt {
  margin: 0 0px;
  padding: 0px 0px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px;
}

pre>code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent;
}

pre {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}

pre code, pre tt {
  background-color: transparent;
  border: none;
}

kbd {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #DDDDDD;
    background-image: linear-gradient(#F1F1F1, #DDDDDD);
    background-repeat: repeat-x;
    border-color: #DDDDDD #CCCCCC #CCCCCC #DDDDDD;
    border-image: none;
    border-radius: 2px 2px 2px 2px;
    border-style: solid;
    border-width: 1px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 10px;
    padding: 1px 4px;
}

/* QUOTES
=============================================================================*/

blockquote {
  border-left: 4px solid #DDD;
  padding: 0 15px;
  color: #777;
}

blockquote>:first-child {
  margin-top: 0px;
}

blockquote>:last-child {
  margin-bottom: 0px;
}

/* HORIZONTAL RULES
=============================================================================*/

hr {
  clear: both;
  margin: 15px 0;
  height: 0px;
  overflow: hidden;
  border: none;
  background: transparent;
  border-bottom: 4px solid #ddd;
  padding: 0;
}

/* TABLES
=============================================================================*/

table th {
  font-weight: bold;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 6px 13px;
}

table tr {
  border-top: 1px solid #ccc;
  background-color: #fff;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

/* IMAGES
=============================================================================*/

img {
  max-width: 100%
}
</style>