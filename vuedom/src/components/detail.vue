<template>
  <div>
    <p>{{news}}</p>
  </div>
</template>
<script>
import axios from "axios"
export default {

  name: "",
  data() {
    return {
      newsId: undefined,
      news: {}
    }
  },
  mounted() {
    this.getId();
  },
  methods: {
    getDetail() {
      axios.get("/detail", { params: { id: this.newsId } }).then((result) => {
        this.news = result.data;
      });
    },
    getId() {
      this.newsId = this.$route.params.id || this.$route.query.id;
      console.log(this.newsId);
      this.getDetail();
    }
  }
}

</script>
<style>


</style>
