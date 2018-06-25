import Vue from 'vue'
import Vuex from 'vuex'
import { formatSlideList } from '@/utils'
import api from '@/utils/api'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bannerList: []
  },
  mutations: {
    bannerList (state, data) {
      state.bannerList = data
    }
  },
  actions: {
    async getBannerList ({ commit }) {
      const banners = await api.getBannerList();
      if (!banners) return;

      commit('bannerList', banners)
    }
  }
});

export default store
