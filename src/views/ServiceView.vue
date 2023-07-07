<template>
    <LoadSpinner />
    <ServiceBanner />
    <br />
    <OurRooms />
</template>

<script>
import OurRooms from '@/components/service/OurRooms.vue';
import ServiceBanner from '@/components/service/ServiceBanner.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';

export default {
    components: {
        OurRooms,
        ServiceBanner,
        LoadSpinner
    }
}

</script>