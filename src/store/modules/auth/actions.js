import { auth } from '@/firebase'

const register = async (context, { email, password, name }) => {
  const response = await auth.createUserWithEmailAndPassword(email, password)
  if (response) {
    context.commit('SET_USER', response.user)
    response.user.updateProfile({ displayName: name })
  } else {
    throw new Error('Unable to register user')
  }
}

const logIn = async (context, { email, password }) => {
  const response = await auth.signInWithEmailAndPassword(email, password)
  if (response) {
    context.commit('SET_USER', response.user)
  } else {
    throw new Error('login failed')
  }
}

const logOut = async (context) => {
  context.commit('SET_USER', null)
}

const fetchUser = async (context, user) => {
  context.commit('SET_LOGGED_IN', user !== null)
  if (user) {
    context.commit('SET_USER', {
      displayName: user.displayName,
      email: user.email
    })
  } else {
    context.commit('SET_USER', null)
  }
}

export default {
  register,
  logIn,
  logOut,
  fetchUser
}
