<template>
  <!-- Load spinner -->
  <LoadSpinner />

  <!-- Slider  -->
  <AboutSlider />

  <!-- About page content -->


  <WhyChooseUsVue />
  <br />

  <AboutBanner />
  <br />

  <WhoAreWeVue />
  <br />

  <AboutOurRoomSectionVue />
</template>

<script>
import AboutSlider from '@/components/about/AboutSlider.vue';
import WhyChooseUsVue from '@/components/about/WhyChooseUs.vue';
import WhoAreWeVue from '@/components/about/WhoAreWe.vue';
import AboutBanner from '@/components/about/AboutBanner.vue';
import AboutOurRoomSectionVue from '@/components/about/AboutOurRoomSection.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';

export default {
  components: {
    WhyChooseUsVue,
    WhoAreWeVue,
    AboutBanner,
    AboutOurRoomSectionVue,
    LoadSpinner,
    AboutSlider
  }
}

</script>