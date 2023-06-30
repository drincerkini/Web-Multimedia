<template>
  <LandingPage />
  <br />
  <br />
  <BannerComponent />
  <br />
  <br />
  <OurPrices />
  <br />
  <br />
<TestimonialVue />
</template>

<script>
import TestimonialVue from '@/components/TestimonialVue.vue';
import LandingPage from '@/components/LandingPage.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import OurPrices from '@/components/OurPrices.vue';

export default {
  components: {
    TestimonialVue,
    LandingPage,
    BannerComponent,
    OurPrices
  }
}

</script>