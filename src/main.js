import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 데이터 바인딩. view와 model을 연결시켜주는 역할을 한다.
new Vue({
  render: h => h(App),
}).$mount('#app')
