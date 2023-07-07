<template>
    <div class="card-body p-4 p-xxl-5">
        <h2 class="h4 mb-2"> {{ title }} </h2>
        <h4 class="display-3 fw-bold text-primary mb-0"> ${{ price }} </h4>
        <p class="text-secondary mb-4"> {{ money }} </p>
        
        <ul class="list-group list-group-flush mb-4">
            <!-- Iteration throug offers array -->
            <li class="list-group-item" v-for="offer in this.offers" :key="offer.title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16" v-if="offer.include">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16" v-else>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            
            <span> <strong> {{ offer.title }} </strong></span>
            </li>
        </ul>
        <a href="#!" class="btn btn-xl btn-primary rounded-pill">Book Now</a>
        </div>
</template>

<script>

export default {
    data(){
        return {
            title: 'Business',
            price: 125,
            money: 'USD / Month',
            offers: [
                {
                    title: '3 times Food Included',
                    include: true 
                },
                {
                    title: 'Free Wiffi',
                    include: true 
                },
                {
                    title: 'Fun Activities',
                    include: true
                },
                {
                    title: 'Free Parking',
                    include: true 
                },
                {
                    title: 'Free Support',
                    include: true 
                },
                {
                    title: 'Weekly Offers',
                    include: true 
                },
            ]
        }
    }
}

</script>