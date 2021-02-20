<template>
    <div class="cartModal">
            <div class="cartModal__left">
                <button class="cartModal__close__btn"> 
                    <span class="cartModal__close__btn__icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 4.5L4.5 13.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.5 4.5L13.5 13.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span> 
                    <span>Close</span> 
                </button>
                <div class="cartModal__event__name">
                The Nathan Cole Experience
                </div>
                <div class="cartModal__event__date">
                8th February 2021
                </div>
                <div class="cartModal__event__ticket" v-for="ticketDetail in ticketDetails" :key="ticketDetail.id">
                {{ ticketDetail.name }}
                </div>
            </div>
            <div class="cartModal__right">
                <h1>Modal</h1>
            </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    name: 'Modal',
    props: ['title', 'likes', 'isPublished', 'commentIds', 'author'],
    data () {
        return {
            showModal: false,
            ticketDetails: {}
        }
    }
  /* mounted () {
    axios
      .get(`v1/ticket-types/events/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data.data)
        this.ticketDetails = response.data.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  } */
}
</script>
<style lang="scss">
.cartModal{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    &__left{
    background: #f2f2f2;
    width: 70%;
    padding-left: 133px;
    }
    &__right{
    background: #ffffff;
    width: 30%;
    }
    &__close__btn{
    background: #FFFFFF;
    border-radius: 60px;
    outline: none;
    margin-top: 50px;
    border: none;
    display: flex;
    padding: 13px;
    }
    &__close__btn__icon{
    display: block;
    }
    &__event__name{
    
    }
}

</style>