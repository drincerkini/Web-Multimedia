
<template>
	<!-- Navbar 1 - Bootstrap Brain Component -->
<nav class="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <LogoPixi />
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1">
          <li class="nav-item" v-for="route in this.routes" :key="route.name">
            <Router-link class="nav-link active" aria-current="page" :to='route.path'>{{ route.name}}</Router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
	
</template>

<script>
import LogoPixi from './LogoPixi.vue';

export default {
  components: {
    LogoPixi
  },

  data(){
    return {
      routes: [	
        { path: '/', name: 'Home'},
        { path: '/about', name: 'About'},
        { path: '/service', name: 'Service'},
        { path: '/contact', name: 'Contact'},
        { path: '/login', name: 'Login'},
        { path: '/register', name: 'Register'},
      ]
    }
  }
}
	
</script>