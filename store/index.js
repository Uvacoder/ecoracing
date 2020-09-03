import Vuex from 'vuex'
import data from './modules/data'
import i18n from './modules/i18n'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      data,
      i18n,
    },
  })
}

export default createStore
