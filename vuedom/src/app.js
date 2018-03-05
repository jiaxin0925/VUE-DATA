import Vue from 'vue'
import App from './app.vue'
import router from './router'

import "./mock"
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
