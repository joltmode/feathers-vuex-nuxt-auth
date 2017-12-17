import Vuex from 'vuex'
import feathersVuex, { initAuth } from 'feathers-vuex'
import feathersClient from '../libraries/feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit ({ commit, dispatch }, { req }) {
        return initAuth({
          commit,
          dispatch,
          req,
          moduleName: 'auth',
          cookieName: 'feathers-jwt'
        })
      }
    },
    plugins: [
      service('users'),
      auth({
        userService: 'users'
      })
    ]
  })
}

export default createStore
