<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">

          <div class="card-header">Welcome, {{user.data.displayName}}</div>
          <div class="card-body">
            <div class="alert alert-success" role="alert">
            You are logged in!
            <div class="my-4">
                  <button  @click.prevent="signOut" class="btn btn-primary">Log Out</button>
            </div>
             </div>
          </div>

          </div>
            <div v-else class="alert alert-danger" role="alert">
              You are not logged in!
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store'
import { useRouter } from 'vue-router/composables'
import { computed } from 'vue'
import { auth } from '@/firebase'

export default {
  name: 'DashboardComponent',

  setup () {
    const store = useStore()
    const router = useRouter()

    auth.onAuthStateChanged(user => {
      store.dispatch('auth/fetchUser', user)
    })

    const user = computed(() => {
      return store.getters['auth/user']
    })

    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/login')
    }

    return { user, signOut }
  }

}
</script>
