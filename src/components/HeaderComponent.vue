
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<!-- <a class="navbar-brand" href="#">DT HOTEL</a> -->
		<a class="navbar-brand" href="#">
      		<LogoPixi />
    	</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#"><router-link to="/service">Service</router-link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#"><router-link to="/register">Register</router-link></a>
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
	}
}

</script>