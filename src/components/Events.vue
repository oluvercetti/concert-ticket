<template>
    <div>
        <div class="loading" v-if="isLoading"></div>
        <div v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </div>
        <div v-else v-show="apiCallComplete">
            <div class="event-grid" >
                <div class="event-grid__item" v-for="(event, index) in eventdata" :key="index">
                    <div class="event-grid__item__image">
                        <router-link :to="`/EventDetails/${event.id}`">
                            <img v-if="event.image === null" :src="defaultImage" alt="Events Image">
                            <img v-else :src="event.image" alt="Event Image">
                         </router-link> 
                    </div>
                    <div class="event-grid__item__group">
                        <div class="event-grid__item__group__date">{{ event.start_time | moment}}</div>
                        <div class="event-grid__item__group__name">{{ event.name }}</div>
                        <div v-if="event.is_free">{{ isFreeMsg }}</div>
                        <div v-else-if="event.is_sold_out">{{ isSoldOut }}</div>
                        <div v-else>{{ eventPrice }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import defaultImage from '@/assets/default_image2.png'

export default {
  name: 'Events',
  data () {
    return {
      eventdata: {},
      errored: false,
      isFreeMsg: 'Free',
      isSoldOut: 'Sold out',
      eventPrice: 'N5000 – N2,000,000',
      defaultImage: defaultImage,
      isLoading: false,
      apiCallComplete: false

    }
  },
  mounted () {
    this.isLoading = true
    axios
      .get('v1/events?limit=6')
      .then(response => {
        console.log(response.data.data.events)
        this.eventdata = response.data.data.events
        this.isLoading = false
        this.apiCallComplete = true
      })
      .catch(error => {
        console.log(error)
        this.errored = true
        this.isLoading = false
      })
  },
  filters: {
  moment (date) {
    return moment(date).format('Do MMMM YYYY');
  }
}
}
</script>
<style lang="scss">
.event-grid{
    display: block;
    font-family: SFProDisplay;
    text-align: center;
      @media screen and (min-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      }
    &__item {
    width: calc(80% - 20px);
    margin: auto;
      @media screen and (min-width: 800px) {
      width: calc(33.3% - 20px);
      margin: 30px 0 19px 20px;
      }

        }
        &__item__image{
        margin-bottom: 19px;
        align-items: center;
        }
        &__item__group{
        margin-bottom: 20px;
        }
            &__item__group__date{
            text-transform: uppercase;
            font-size: 12px;
            line-height: 14px;
            }
            &__item__group__name{
            font-family: Helvetica, Arial, sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            }
}

</style>
