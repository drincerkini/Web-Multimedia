<template>
<!-- Pricing 2 - Bootstrap Brain Component -->
<section class="bg-light py-5 py-xl-8">
  <div class="container mb-5 mb-md-6">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
        <h3 class="fs-6 text-secondary mb-2 text-uppercase"> {{ headerTitle }} </h3>
        <h2 class="display-5 mb-4 mb-md-5"> {{ desc }} </h2>
        <hr class="w-50 mx-auto mb-0 mb-lg-5 text-secondary" style="background-color: #84aba8;" >
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row gy-5 gy-lg-0 gx-xl-5">
      <div class="col-12 col-lg-4">
        <div class="card border-0 border-bottom border-primary shadow-sm">

          <!-- Calling Starter Offer Component -->
          <StarterOfferVue />
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card border-0 border-bottom border-primary shadow-lg pt-md-4 pb-md-4 mt-md-n4">

          <!-- Calling Pro Offer Component -->
          <ProOfferVue />
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card border-0 border-bottom border-primary shadow-sm">

          <!-- Calling Bussines Offer Component -->
          <BussinesOffer />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import StarterOfferVue from '@/components/home/StarterOffer.vue';
import ProOfferVue from '@/components/home/ProOffer.vue';
import BussinesOffer from '@/components/home/BussinesOffer.vue';

export default{

  components: {
    StarterOfferVue,
    ProOfferVue,
    BussinesOffer
  },
  data(){
    return {
      headerTitle: 'Our Pricing',
      desc: 'We offer great pricing offers for everyone.'
    }
  }
}

</script>