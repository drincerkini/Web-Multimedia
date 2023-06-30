<template>
    <LoadSpinner />
    <ServiceBanner />
    <br />
    <OurRooms />
</template>

<script>
import OurRooms from '@/components/OurRooms.vue';
import ServiceBanner from '@/components/ServiceBanner.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';

export default {
    components: {
        OurRooms,
        ServiceBanner,
        LoadSpinner
    }
}

</script>