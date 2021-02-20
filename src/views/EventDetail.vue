<template>
    <div class="eventdetail">
        <Header />
        <EventInfo />
        <Footer />
    </div>
    
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import EventInfo from '@/components/EventInfo.vue'
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