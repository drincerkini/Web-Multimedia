
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<!-- Header Logo animated with pixi.js -->
				<LogoPixi />
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item" v-for="route in this.routes" :key="route.name">
						<a class="nav-link active" aria-current="page" href="#"><router-link :to="route.path">{{route.name}}</router-link></a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
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