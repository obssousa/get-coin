import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#687bea',
        secondary: '#424242',
        accent: '#9daaff'
      },
      dark: {
        primary: '#687bea',
        secondary: '#424242',
        accent: '#9daaff'
      }
    }
  }
})

export default vuetify
