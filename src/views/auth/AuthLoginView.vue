<template>
  <v-content class="d-flex flex-column align-center primary darken-1 fill-height">
    <v-container class="d-flex flex-column align-center primary fill-height">
      <div class="d-flex align-center">
        <v-icon large class="pr-3" color="secondary">
            mdi-hand-coin
        </v-icon>

        <h4 class="toolbar-title">
            GETCOIN
        </h4>
      </div>
      <v-card width="400px">
        <v-card-text dark class="d-flex flex-column align-center secondary">
          <div v-if="error" class="alert alert-danger">{{ error }}</div>
          <v-form action="#" @submit.prevent="Login">
            <v-text-field
              dark
              v-model="email"
              :rules="nameRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              dark
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Senha"
              required
            ></v-text-field>

            <v-btn
              dark
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Entrar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router/composables'

export default {
  name: 'LoginComponent',
  setup () {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
}
</script>

<style lang="scss" scoped>
.toolbar-title {
    z-index: 2;
    margin-top: -15px;
    margin-left: -29px;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 5px;
}
</style>
