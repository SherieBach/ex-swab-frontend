import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from "./directives/ScrollAnimation";

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false;
/*

router.beforeEach((to, from, next) => {
  const { allContent } = store.state.content;
  console.log('main beforeEach – allContent:', allContent);

  if (allContent.length === 0) {
    store.dispatch('getAllJSONContent')
        .then(() => {
          console.log('main had no json so we loaded it:', store.state.content.allContent);
          next()
        })
  } else {
    next()
  }
});
*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
