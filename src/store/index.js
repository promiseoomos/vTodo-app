import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: ""
    },
    mutations: {

        SET_NAME(state, name) {
            state.name = name
        }
    },
    actions: {

        setName({ commit }, name) {
            commit("SET_NAME", name)
        }
    },
    modules: {}
});