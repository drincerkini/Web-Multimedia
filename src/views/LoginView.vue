<template>
  <LoadSpinner />
    <!-- Login 8 - Bootstrap Brain Component -->
<section class="bg-light p-3 p-md-4 p-xl-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-xxl-11">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6">
              <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="../assets/hoteel5.jpeg" alt="">
            </div>
            <!-- Login Form Component -->
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import LoginForm from '../components/login/LoginForm';
import LoadSpinner from '@/components/LoadSpinner.vue';

export default {
  components: {
    LoginForm,
    LoadSpinner
  }
}

</script>