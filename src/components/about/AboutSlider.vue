<template>

<div id="carouselExampleIndicators" class="carousel slide carousel-container">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="../../assets/seaaa.jpeg" alt="...">
    </div>
    <div class="carousel-item">
        <img src="../../assets/hoteel2.jpeg" alt="...">
    </div>
    <div class="carousel-item">
        <img src="../../assets/jok.jpeg" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<style scoped>
.carousel-container {
  height: 100vh; /* Set the height to 100% of the viewport height */
}

.carousel-inner {
  height: 100%; /* Set the height to 100% of the parent container */
}

</style>