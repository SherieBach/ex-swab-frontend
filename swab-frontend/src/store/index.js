import Vue from 'vue'
import Vuex from 'vuex'
import content from "./modules/content";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content
  }
});
