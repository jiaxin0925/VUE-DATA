<template>
  <div>
    this is play
    <h3>{{music.name}}</h3>
    <p>{{music.author}}</p>
    <audio :src="music.url" controls></audio>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "",
  data() {
    return {
      musicId: undefined,
      music: {}
    }
  },
  mounted() {
    this.getId();
  },
  methods: {
    getMusic() {
      axios.get("/music", { params: { id: this.musicId } }).then((result) => {
        this.music = result.data
      });
    },
    getId() {
      this.musicId = this.$route.params.id;
      this.getMusic();
    }
  }
}

</script>
<style>


</style>
