<template>
  <div>
    this is news page
    <ul>
      <li v-for="news in newsLists">
        query-get请求:        <router-link :to="{path:'/detail',query:{ id:news.newsId}}">{{news.title}}</router-link>------<br>
        params-post请求：<router-link :to="{name:'detail',params:{ id:news.newsId}}">{{news.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "",
  data() {
    return {
      newsLists: null
    }
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.get("/sina").then((result) => {
        this.newsLists = result.data.news;
        console.log(this.newsLists);
      });
    }
  }
}

</script>
<style>


</style>
