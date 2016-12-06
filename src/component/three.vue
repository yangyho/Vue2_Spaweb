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
        }]
      }
    },
    methods:{
      // 获取md文件名
      getFileName: function(name){
        let mdURL = "'../assets/md/" + name + ".md'"
        console.log(mdURL)
        return mdURL
      }
    },
    mounted (){
      let vm = this;
      var Remarkable = require('remarkable');
      var md = new Remarkable();
      let url = vm.getFileName()
      console.log(url)
      var file = require('../assets/md/duoshuo_init.md');
      $.get(file).success(text=>{
        $(".content").html(md.render(text).replace(/^img_01^/,"<img src='/static/img/get_file_1.png' class='img-responsive' />"))
      })
    }
  }

</script>

<style>
.content{
  margin-top: 20px;
  font-size: 14px;
}
.content p{
  margin: 15px 0; 
}
</style>