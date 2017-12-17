<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        bus-stop-announcer
      </h1>
      <h2 class="subtitle">
        Bus stop announcer [Talsu Autotransports]
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>

    <div>
      <form v-if="!loggedIn" @submit.prevent="tryLogin">
        <label>
          <span>Email:</span>
          <br>
          <input type="email" v-model="email" placeholder="user@example.com">
        </label>

        <br>

        <label>
          <span>Password:</span>
          <br>
          <input type="password" v-model="password" placeholder="password">
        </label>

        <br>

        <button type="submit">Sign in</button>
      </form>
      <div v-else>
        <pre v-if="userData">{{ userData }}</pre>
        <button v-else @click="getUser">Get user data</button>
        <pre>{{ accessToken }}</pre>
        <button @click="logout">Sign out</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken,
      userData: state => state.auth.user
    }),
    loggedIn () {
      return this.accessToken !== null
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/authenticate',
      logout: 'auth/logout',
      populateUser: 'auth/populateUser'
    }),
    tryLogin () {
      this.login({
        strategy: 'local',
        email: this.email,
        password: this.password
      })
    },
    getUser () {
      this.populateUser(this.$store.state.auth.payload.userId)
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
