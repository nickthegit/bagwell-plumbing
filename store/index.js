export const state = () => ({
  navState: false
})

export const mutations = {
  toggleNav(state) {
    state.navState = !state.navState
  },
  toggleNavPayload(state, payload) {
    state.navState = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('core/load')
  },
  setNav({ commit }) {
    commit('toggleNav')
  },
  setNavPayload({ commit }, payload) {
    commit('toggleNavPayload', payload)
  }
}
