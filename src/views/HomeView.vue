<template>
  <LoadSpinner />
  <LandingPage />
  <br />
  <br />
  <BannerComponent />
  <br />
  <br />
  <OurPrices />
  <br />
  <br />
  <HomeSlider />
  <br />
  <br />
  <TestimonialVue />  

</template>

<script>
import TestimonialVue from '@/components/home/TestimonialVue.vue';
import LandingPage from '@/components/home/LandingPage.vue';
import BannerComponent from '@/components/home/BannerComponent.vue';
import OurPrices from '@/components/home/OurPrices.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';
import HomeSlider from '@/components/home/HomeSlider.vue';

export default {
  components: {
    TestimonialVue,
    LandingPage,
    BannerComponent,
    OurPrices,
    LoadSpinner,
    HomeSlider
  }
}

</script>