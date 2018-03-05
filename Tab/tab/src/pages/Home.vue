<template>
  <div class="jumbotron">
    <h1>这个是路由对应的页面,下面就是一个表格组件</h1>
    <table-com/>
  </div>
</template>
<script>
    import table from '../components/table.vue'
    export default {
      data () {
        return {

        }
      },
      components: {
        tableCom: table
      }
    }
</script>