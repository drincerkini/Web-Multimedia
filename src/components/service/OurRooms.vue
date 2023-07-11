<template>
  <!-- CSS Files -->
<link rel="stylesheet" href="https://unpkg.com/bs-brain/bsb.css" />
   <!-- Project 2 - Bootstrap Brain Component -->
<section class="bg-light py-5 py-xl-8">
<div class="container mb-5 mb-md-6">
  <div class="row justify-content-md-center">
    <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
      <h2 class="mb-4 display-5">Our Activities</h2>
      <p class="text-secondary mb-4 mb-md-5">Begin your day with a rejuvenating yoga session by our serene poolside or indulge in a refreshing swim. Immerse yourself in relaxation at our spa, where you can enjoy a variety of soothing treatments and massages.</p>
      <hr class="w-50 mx-auto mb-0 text-secondary">
    </div>
  </div>
</div>

<div class="container overflow-hidden">
  <div class="row gy-2 g-md-2 g-xl-3 bsb-project-2-grid">
    <div class="col-12 col-md-4 bsb-project-2-item" v-for="element in services" :key="element.title">
      <figure class="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
        <a href="#!">
          <img class="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" :src=element.image alt="" />
        </a>
        <figcaption>
          <h3 class="text-white bsb-hover-fadeInLeft">{{ element.title }}</h3>
          <div class="text-white bsb-hover-fadeInRight">{{ element.text }}</div>
        </figcaption>
      </figure>
    </div>
  </div>
</div>

  <audio controls :autoplay=true>
    <source src="../../assets/beach-sound.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
</section>
</template>

<script>
export default {
data(){
  return {
    services: [
      {
        image: 'https://images.pexels.com/photos/5269452/pexels-photo-5269452.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/5269897/pexels-photo-5269897.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/6149460/pexels-photo-6149460.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/9043958/pexels-photo-9043958.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/2607115/pexels-photo-2607115.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/2531195/pexels-photo-2531195.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/5269485/pexels-photo-5269485.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      },
      {
        image: 'https://images.pexels.com/photos/52988/swim-water-diving-underwater-52988.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Canvas Lover',
        text: 'Photography'
      }
    ]
  }
}
}
</script>