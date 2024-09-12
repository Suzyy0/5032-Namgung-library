import {createStore} from 'vuex';

export default createStore({
    state:{
        // false means they cannot login, true means they can login
        isAuthenticated: false,
        user: null,
    },
    mutations:{
        setAuthentication(state, status){
            state.isAuthenticated = status;
        },
        setUser(state, user){
            state.user = user;
        },
    },
    actions:{
        login({commit},user){
            commit('setAuthentication', true);
            commit('setUser', user);
        },
        logout({commit}){
            commit('setAuthentication', false);
            commit('setUser', null);
        },
    },
});