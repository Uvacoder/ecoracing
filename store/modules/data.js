// let locale = localStorage.getItem("locale");
export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    products: [
      {
        id: 1,
        title: 'products.product.title1',
        slug: 'products.product.slug1',
        image:
          'https://internationalecoracing.com/wp-content/uploads/2019/10/Eco-Racing-Motor-InternationalEcoRacing-com.png',
        price: '8',
        description: 'products.product.desc1',
        howtouse: 'products.product.howtouse',
      },
      {
        id: 2,
        title: 'products.product.title2',
        slug: 'products.product.slug2',
        image:
          'https://internationalecoracing.com/wp-content/uploads/2019/10/Eco-Racing-Mobil-Bensin-InternationalEcoRacing-com.png',
        price: '30',
        description: 'products.product.desc2',
        howtouse: 'products.product.howtouse',
      },
      {
        id: 3,
        title: 'products.product.title3',
        slug: 'products.product.slug3',
        image:
          'https://internationalecoracing.com/wp-content/uploads/2019/10/Eco-Racing-Motor-Jasa-InternationalEcoRacing-com.png',
        price: '35',
        description: 'products.product.desc3',
        howtouse: 'products.product.howtouse',
      },
    ],
    product: {},
  },
  // -----------------------------------------------------------------
  getters: {
    products: (state) => state.products,

    product: (state) => state.product,
  },
  // -----------------------------------------------------------------
  mutations: {
    toggleLocale(state) {
      state.locale = !state.locale
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getProduct: (ctx, payload) => {
      const pr = ctx.state.products.filter((pr) => {
        return pr.slug === payload ? pr : ''
      })[0]

      ctx.state.product = pr
    },
  },
}
