export const state = () => ({
  cardsList: []
})

export const actions = {
  async getAllCards({ commit }) {
    try {
      const cards = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      // /api/v1/card/getAll
      commit('SET_CARDS_LIST', cards)
      console.log('Cards loaded.')
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  SET_CARDS_LIST(state, cards) {
    state.cardsList = cards
  }
}

export const getters = {
  cardsList: (state) => state.cardsList
}
