<template>
  <div>
    <ul class="clearfix">
      <li>
        <router-link :to="{path:'/tabs/tab1'}">tab1</router-link>
        <button type="button" @click="goTab1">tab1</button>
      </li>
      <li>
        <router-link :to="{path:'/tabs/tab2'}">tab2</router-link>
      </li>
      <li>
        <router-link :to="{path:'/tabs/tab3'}">tab3</router-link>
      </li>
    </ul>
    <!-- 嵌套路由 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {}
  },methods:{
  	goTab1(){
  		this.$router.push("/tabs/tab1");
  	}
  }
}

</script>
<style scoped>
.clearfix::after {
  display: inline-block;
  content: "";
  zoom: 1;
  clear: both;
}

ul {
  width: 500px;
  list-style: none;
}

ul li {
  line-height: 30px;
  float: left;
  width: 33.33%;
  border: 1px solid #ccc;box-sizing: border-box
}

</style>
