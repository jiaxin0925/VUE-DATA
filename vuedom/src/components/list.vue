<template>
  <div>
    this is music list
    <ul>
        <li v-for="list in lists">
        <router-link :to="{name:'play',params:{id:list.musicId}}">{{list.name}}</router-link>
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
      lists: null
    }
  },
  mounted() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      axios.get("/list").then((result) => {
        this.lists = result.data.list;
      });
    }
  }
}

</script>
<style>


</style>
