<template>
  <HeaderComponentVue />
  <nav>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/service">Service</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view />

  <FooterComponent />
  
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponentVue from './components/HeaderComponent.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponentVue
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
