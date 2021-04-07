<template>
    <div class="eventdetail">
        <Header />
        <EventInfo />
        <Footer />
    </div>
    
</template>
<script>
import Header from '@/components/concert-header.vue'
import Footer from '@/components/concert-footer.vue'
import EventInfo from '@/components/event-info.vue'
export default {
    name: 'EventDetail',
    components: {
        Header,
        Footer,
        EventInfo
    }
}
</script>
<style lang="scss">
body{
margin: 0;
}
.eventdetail{
background-image: url('../assets/Lines.png');
background-repeat: no-repeat;
background-position: bottom right;
min-height: 100vh;
background-size: contain;
}
</style>