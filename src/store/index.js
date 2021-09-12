import Vuex from 'vuex';
import Vue from 'vue';
import login from './modules/login'

// load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login
    }
})