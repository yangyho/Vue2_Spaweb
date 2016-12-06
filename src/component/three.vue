<template>
  <div id="secondcomponent">
    <!-- <h1>跳转到第三页</h1> -->
    <!-- <a> written by {{ author }} </a> -->
    <h3>读取md文件内容</h3>
    <ul>
      <li v-for="article in articles" @click="getFileName(article.name)"><a href="#">{{article.title}}</a></li>
    </ul>
    <div class="content"></div>
  </div>
</template>

<script>
  import Remarkable from 'remarkable'
  export default {
    data() {
      return {
        author: "yangyh",
        articles: [{
          title: "README1.md",
          name: "README1"
        },{
          title: "README2.md",
          name: "README2"
        }]
      }
    },
    methods:{
      // 获取md文件名
      getFileName: function(fname){
        this.Query(fname);
      },
      // 查询
      Query: function(fname){
        let md = new Remarkable();
        let mdURL = '../src/assets/md/' + fname + '.md';
        $.get(mdURL,function(text){
          $(".content").html(md.render(text))
        })
      }
    },
    mounted (){
      let fname = "README1";
      this.Query(fname);
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