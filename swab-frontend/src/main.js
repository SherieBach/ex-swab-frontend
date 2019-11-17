import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

/* Not done, connect to router and store
router.beforeEach((to, from, next) => {
  const { allEvents } = store.state.assets;
  console.log('main beforeEach – allevents:', allEvents);

  if (allEvents.length === 0) {
    store.dispatch('loadEventsFromJSON')
        .then( () => {
          console.log('main had no data so we loaded it:', store.state.assets.allEvents);
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
