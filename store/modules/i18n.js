// let locale = localStorage.getItem("locale");
export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    locale: 'en',
    backLeftAnimation: 'backInLeft',
    rotateLeftAnimation: 'rotateInDownLeft',
    fadeRightAnimation: 'fadeInRight',
    fadeLeftAnimation: 'fadeInLeft',
    bounceInRightAnimation: 'bounceInRight',
    bounceInLeftAnimation: 'bounceInLeft',
  },
  // -----------------------------------------------------------------
  getters: {
    rtl: (state) => state.locale === 'ar',

    lang: (state) => state.locale,
    backLeftAnimation: (state) => state.backLeftAnimation,
    rotateLeftAnimation: (state) => state.rotateLeftAnimation,
    fadeRightAnimation: (state) => state.fadeRightAnimation,
    fadeLeftAnimation: (state) => state.fadeLeftAnimation,
    bounceInRightAnimation: (state) => state.bounceInRightAnimation,
    bounceInLeftAnimation: (state) => state.bounceInLeftAnimation,
  },
  // -----------------------------------------------------------------
  mutations: {
    setLocale(state, payload) {
      if (payload === 'ar') {
        state.backLeftAnimation = 'backInRight'
        state.rotateLeftAnimation = 'rotateInDownRight'
        state.fadeRightAnimation = 'fadeInLeft'
        state.fadeLeftAnimation = 'fadeInRight'
        state.bounceInRightAnimation = 'bounceInLeft'
        state.bounceInLeftAnimation = 'bounceInRight'
      }
      localStorage.setItem('locale', payload)
      state.locale = payload
    },
  },
  // -----------------------------------------------------------------
  actions: {},
}
