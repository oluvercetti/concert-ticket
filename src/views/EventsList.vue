<template>
    <div class="eventpage">
        <Header/>
        <div class="eventpage-main">
          <h2 class="eventpage-main-text">{{eventpagemaintext}}</h2>
          <div class="eventpage-main-page">
            <Events />
          </div>
        </div>
        
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Events from '@/components/Events.vue'

export default {
  name: 'EventsList',
  components: {
    Header,
    Footer,
    Events
  },
  data() {
    return {
      eventpagemaintext: "The best events happening now.",
    }
  },
};
</script>
<style lang="scss">
html{
background-color: #f2f2f2;
}
.eventpage {
background-color: #f2f2f2;
  &-main {
    
    display: block;
    text-align: center;
    @media screen and (min-width: 768px) {
    padding: 65px 100px;
    text-align: left;
    }
    &-text {
    font-size: 14px;
    @media screen and (min-width: 768px) {
    font-size: 36px;
    padding-left: 33px;
    }
    }
  }
}

leadtext {
  padding-top: 40px;
  font-weight: 900;

  font-family: Flutterwave, Panton, sans-serif;

  font-size: 36px;
  line-height: 40px;
  color: #333333;
}
</style>
