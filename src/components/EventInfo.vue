<template>
    <div class="event-info">
    <script type="application/javascript" src="https://checkout.flutterwave.com/v3.js"></script>
    <div class="loading" v-if="isLoading"></div>
        <div v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </div>
        <div v-else v-show="apiCallComplete">
            <div class="event-info__top">
                <div class="event-info__top__left">
                    <div class="event-info__top__left__date">{{ eventdetail.start_time | moment}}</div>
                    <h2 class="event-info__top__left__name">{{ eventdetail.name }}</h2>
                    <div class="event-info__top__left__description">{{ eventdetail.description }}</div>
                    <div v-if="eventdetail.is_free">{{ isFreeMsg }}</div>
                    <div v-else-if="eventdetail.is_sold_out">{{ isSoldOut }}</div>
                    <div class="event-info__top__left__price" v-else>{{ eventPrice }}</div>
                    <button class="event-info__top__left__btn button" @click="showModal(true)">{{ buyTicket }}</button>
                </div>
                <div class="event-info__top__right">
                    <img class="event-info__top__right__image" v-if="eventdetail.image === null" :src="defaultImage">
                    <img class="event-info__top__right__image" v-else :src="eventdetail.image">
                </div>
            </div>
            <hr class="event-info__line">
            <div class="event-info__bottom">
                <div class="event-info__bottom__left">
                    <div class="event-info__bottom__left__title">{{ venueTitle }}</div>
                    <div class="event-info__bottom__left_address">{{ eventdetail.venue }}</div>
                    <div class="event-info__bottom__left_map">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 1.5V13.5" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 4.5V16.5" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <div class="event-info__bottom__left_map_text">{{ mapText }}</div>
                    </div>
                </div>
                <div class="event-info__bottom__right">
                    <div class="event-info__bottom__right__datetitle">{{ dateTitle }}</div>
                    <div class="event-info__bottom__right__datetime"> {{ eventdetail.start_time | momentFull}}</div>
                    <div class="event-info__bottom__right__socialtitle">{{ socialTitle }}</div>
                    <div class="event-info__bottom__right__socials" v-for="link in eventdetail.social_links" :key="link">
                    
                    </div>
                </div>
            </div>
        </div> 
        <transition name="slide-fade">
        <div v-if="showModalVal" class="cartModal">
            <div class="cartModal__left">
                <button class="cartModal__left__close__btn" @click="showModal(false)"> 
                    <span class="cartModal__left__close__btn__icon">
                        <svg class="cartModal__left__close__btn__icon__svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 4.5L4.5 13.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.5 4.5L13.5 13.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span> 
                    <span>Close</span> 
                </button>
                <div class="cartModal__left__event__name">
                {{ eventdetail.name }}
                </div>
                <div class="cartModal__left__event__date">
                {{eventdetail.start_time | moment}}
                </div>
                <div class="cartModal__left__event__ticket" 
                v-for="(ticketDetail, index) in ticketDetails" :key="index" :value="index">              
                    <div class="cartModal__left__event__ticket__info" >
                        <div class="cartModal__left__event__ticket__info__name">{{ ticketDetail.name }}</div>
                        <div class="cartModal__left__event__ticket__info__price">{{ ticketDetail.price | currencySymbol }}</div>
                        <div class="cartModal__left__event__ticket__info__button">
                            <button :disabled="ticketDetail.ticketCount == 0" class="cartModal__left__event__ticket__info__button__operator" @click="ticketDetail.ticketCount--">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <circle cx="13" cy="11" r="10" fill="white"/>
                                <path d="M16 9C17.1046 9 18 9.89543 18 11C18 12.1046 17.1046 13 16 13H10C8.89543 13 8 12.1046 8 11C8 9.89543 8.89543 9 10 9H16Z" fill="#828282"/>
                                </g>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="-1" dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                            </button>
                            <div class="cartModal__left__event__ticket__info__button__count">{{ticketDetail.ticketCount}}</div>
                            <button :disabled="ticketDetail.ticketCount >= ticketDetail.qty_available" class="cartModal__left__event__ticket__info__button__operator"  @click="ticketDetail.ticketCount++">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <circle cx="13" cy="11" r="10" fill="white"/>
                                <path d="M18 10.99C18 11.4929 17.5924 11.9005 17.0896 11.9005H16.0072C14.9066 11.9005 14.0143 12.7927 14.0143 13.8933V14.9754C14.0143 15.5413 13.5556 16 12.9898 16C12.4239 16 11.9652 15.5413 11.9652 14.9754V13.8831C11.9652 12.7881 11.0775 11.9005 9.98258 11.9005H8.91045C8.40762 11.9005 8 11.4929 8 10.99C8 10.4872 8.40762 10.0796 8.91045 10.0796H9.98258C11.0775 10.0796 11.9652 9.19197 11.9652 8.09702V7.02459C11.9652 6.45872 12.4239 6 12.9898 6C13.5556 6 14.0143 6.45872 14.0143 7.02459V8.08678C14.0143 9.18738 14.9066 10.0796 16.0072 10.0796H17.0896C17.5924 10.0796 18 10.4872 18 10.99Z" fill="#828282"/>
                                </g>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="-1" dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                    <hr>
                </div>
                <div class="cartModal__left__event__endtime">
                Ticket sales ends on {{eventdetail.tickets_sale_end_date | moment}}
                </div>
            </div>
            <div class="cartModal__right">
                <div class="cartModal__right__title">{{ orderSummaryTitle }}</div>
                <hr class="cartModal__right__divider">
                <div class="cartModal__right__ticket" v-for="(ticketDetail, index) in ticketDetails" :key="index">
                    <div class="cartModal__right__ticket__name" v-show="ticketDetail.ticketCount > 0">{{ticketDetail.ticketCount}} - {{ticketDetail.name}}</div>
                    <div class="cartModal__right__ticket__price" v-show="ticketDetail.ticketCount > 0">{{ticketDetail.price * ticketDetail.ticketCount  | currencySymbol}}</div>
                </div>
                <hr class="cartModal__right__divider">
                <div class="cartModal__right__checkout">
                    <div class="cartModal__right__checkout__subtotal">
                        <div class="cartModal__right__checkout__subtotal__title">Sub-total</div>
                        <div class="cartModal__right__checkout__subtotal__price">{{getSubTotal | currencySymbol}}</div>
                    </div>
                    <div class="cartModal__right__checkout__vat">
                        <div class="cartModal__right__checkout__vat__title">Vat</div>
                        <div class="cartModal__right__checkout__svat__price">{{vatAmount = getSubTotal * vatRate | currencySymbol}}</div>
                    </div>
                    <div class="cartModal__right__checkout__total">
                        <div class="cartModal__right__checkout__total__title">Total Payment</div>
                        <div class="cartModal__right__checkout__total__price" >{{(totalAmount = vatAmount + subTotalAmount) | currencySymbol}}</div>
                    </div>
                </div>
                
                <button :disabled="totalAmount == 0" class="cartModal__right__button button" @click="makePayment">Continue</button>
                <div class="cartModal__right__customerProtection">
                    <div class="cartModal__right__customerProtection__icon">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6204 25.0104L10.7736 25.8376C9.97042 26.1973 9.02503 25.944 8.50934 25.2309L7.32356 23.5911C7.16849 23.3767 6.9293 23.2386 6.66605 23.2115L4.65308 23.0045C3.77765 22.9144 3.08558 22.2224 2.99554 21.3469L2.7885 19.3339C2.76143 19.0707 2.62333 18.8315 2.40889 18.6764L0.769125 17.4907C0.0559958 16.975 -0.197319 16.0296 0.162423 15.2264L0.989612 13.3796C1.09779 13.1381 1.09779 12.8619 0.989612 12.6204L0.162423 10.7736C-0.197319 9.97042 0.0559958 9.02504 0.769125 8.50934L2.40889 7.32356C2.62333 7.16849 2.76143 6.9293 2.7885 6.66605L2.99554 4.65308C3.08558 3.77765 3.77765 3.08557 4.65308 2.99553L6.66605 2.7885C6.9293 2.76143 7.16849 2.62333 7.32356 2.40889L8.50934 0.769125C9.02503 0.0559959 9.97042 -0.197319 10.7736 0.162423L12.6204 0.989606C12.8619 1.09778 13.1381 1.09778 13.3796 0.989606L15.2264 0.162423C16.0296 -0.197319 16.975 0.0559959 17.4907 0.769125L18.6764 2.40889C18.8315 2.62333 19.0707 2.76143 19.3339 2.7885L21.3469 2.99553C22.2224 3.08557 22.9144 3.77765 23.0045 4.65308L23.2115 6.66605C23.2386 6.9293 23.3767 7.16849 23.5911 7.32356L25.2309 8.50934C25.944 9.02504 26.1973 9.97042 25.8376 10.7736L25.0104 12.6204C24.9022 12.8619 24.9022 13.1381 25.0104 13.3796L25.8376 15.2264C26.1973 16.0296 25.944 16.975 25.2309 17.4907L23.5911 18.6764C23.3767 18.8315 23.2386 19.0707 23.2115 19.3339L23.0045 21.3469C22.9144 22.2224 22.2224 22.9144 21.3469 23.0045L19.3339 23.2115C19.0707 23.2386 18.8315 23.3767 18.6764 23.5911L17.4907 25.2309C16.975 25.944 16.0296 26.1973 15.2264 25.8376L13.3796 25.0104C13.1381 24.9022 12.8619 24.9022 12.6204 25.0104ZM7.98252 11.2433L6.40654 12.8193L11.6971 18.1099L19.8185 9.98847L18.2426 8.41249L11.6971 14.9579L7.98252 11.2433Z" fill="#2D9CDB"/>
                        </svg>
                    </div>
                    <div class="cartModal__right__customerProtection__text">
                        <div class="cartModal__right__customerProtection__text__top">100% customer protection</div>
                        <div class="cartModal__right__customerProtection__text__bottom">Money back guarantee</div>
                    </div>
                </div>
            </div>
            
        </div>
        </transition>   
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
      eventdetail: {},
      ticketDetails: {},
      errored: false,
      isFreeMsg: 'Free',
      isSoldOut: 'Sold out',
      eventPrice: 'N5000 – N2,000,000',
      defaultImage: defaultImage,
      venueTitle: 'Venue',
      dateTitle: 'Date and Time',
      buyTicket: 'Buy Ticket',
      socialTitle: 'Social Links',
      showModalVal: false,
      mapText: 'View map for directions',
      ticketCount: 0 ,
      orderSummaryTitle: 'Order Summary',
      isLoading: false,
      apiCallComplete: false,
      vatRate: 0.075,
      vatAmount: 0,
      subTotalAmount: 0,
      totalAmount: 0


    }
  },
  mounted () {
      this.isLoading= true,
    axios
        .all([
            
                axios.get(`v1/events/${this.$route.params.id}`),
                axios.get(`v1/ticket-types/events/${this.$route.params.id}`)
            ])
        .then(response => {
        this.eventdetail = response[0].data.data
        this.ticketDetails = response[1].data.data
        this.ticketDetails.forEach((ticketDetail) => {
            this.$set(ticketDetail, 'ticketCount', this.ticketCount)  
        });
        console.log(this.ticketDetails);
        this.isLoading = false;
        this.apiCallComplete = true;
      })
        .catch(error => {
            console.log(error)
            this.errored = true;
            this.isLoading = false;
        })
  },
  filters: {
  moment(date) {
      if(date) {
          return moment(date).format('Do MMMM YYYY');
      }
    
  },
  momentFull(date) {
      if(date) {
        return moment(date).format('dddd, MMMM Do YYYY, h:mm a');
      }
  },
  currencySymbol(amount) {
      if(amount){
          return 'N'+Number(amount).toLocaleString();
      }
  }

  }, 
  methods:{
      showModal (value){
          this.showModalVal = value;

      },
      
      makePayment () {
          let transref = Math.floor(Math.random() * 342) + Date.now();
          FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
            tx_ref: transref,
            amount: this.totalAmount,
            currency: "NGN",
            country: "NG",
            payment_options: "card",
            redirect_url: // specified redirect URL
                "https://final-concert-ticket.herokuapp.com",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "idowu.ayodeji.oluseyi@gmail.com",
                phone_number: "08130817427",
                name: "Ayodeji Idowu",
            },
            callback: function (data) {
                console.log(data);
            },
            onclose: function() {
                // close modal
            },
            customizations: {
                title: this.eventdetail.title,
                description: this.eventdetail.description,
            },
            })
      }

  },
  computed: {
    getSubTotal() {
        return this.ticketDetails.reduce((sum, ticketDetail) => {
           return this.subTotalAmount =  sum += (ticketDetail.price * ticketDetail.ticketCount);
        }, 0);
    },
  },

    
}
</script>
<style lang="scss">

.event-info{
        margin: auto;
        font-family: SFProDisplay;
        height: auto;
        @media screen and (min-width: 800px) {
        margin: 57px 250px;
        }
        &__top{
         display: block;
         text-align: center;
         margin-bottom: 20px;
            @media screen and (min-width: 800px) {
            display: flex;
            flex-direction: row;
            text-align: left;
            margin-bottom: 0;
            }
        }
            &__top__left{
            box-sizing: border-box;
            @media screen and (min-width: 800px) {
            width: 50%;
            min-height: 340px;
            }
            }
                &__top__left__date{
                margin: 22px 0;
                text-transform: uppercase;
                height: 10px;
                font-weight: bold;
                }
                &__top__left__name{
                font-family: Helvetica, Arial, sans-serif;
                margin-bottom: 13px;
                @media screen and (min-width: 800px) {
                font-size: 36px;
                line-height: 40px;
                }
                }
                &__top__left__description{
                
                margin-bottom: 29px;
                @media screen and (min-width: 800px) {
                min-height: 74px;
                }
                
                }
                &__top__left__price{
                height: 28px;
                margin-bottom: 20px;
                font-weight: bold;
                }
                &__top__left__btn{
                    padding: 1em 0;
                    background-color: #F5A623;
                    margin-bottom: 10px;
                    @media screen and (min-width: 800px) {
                    min-width: 70%;
                    font-size: 14px;
                    
                    }
                }
            &__top__right{
            
                margin: auto;
                width: 40%;
                text-align: center;
            @media screen and (min-width: 800px) {
            width: 50%;
            }
            }
            &__top__right__image{
            min-width: 100%;
            min-height: 100%;
            border: none;
            }
        &__line{
        border: 1px solid #CCB7B1;
        text-align: center;
        margin: auto;
        width: 40%;
            @media screen and (min-width: 800px) {
            margin: 35px 0;
            width: 100%;
            }
        }
        &__bottom{
        display: block;
        text-align: center;
        margin-top: 20px;
        @media screen and (min-width: 800px) {
        display: flex;
        text-align: left;
        }
        }
            &__bottom__left{
            
            @media screen and (min-width: 800px) {
            width: 50%;
            }
            }
                &__bottom__left__title{
                text-transform: uppercase;
                margin-bottom: 19px;
                }
                &__bottom__left_address{
                font-family: Helvetica, Arial, sans-serif;
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                }
                &__bottom__left_map{
                
                    @media screen and (min-width: 800px) {
                    display: flex;
                    }

                }
                &__bottom__left_map_text{
                color: #F5A623;
                margin-left: 2%;
                }
            &__bottom__right{
            margin-top: 20px;
            @media screen and (min-width: 800px) {
            width: calc(50% - 13px);
            margin-top: 0;
            margin-left: 13px;
            }
            }
                &__bottom__right__datetitle{
                text-transform: uppercase;
                margin-bottom: 20px;
                }
                &__bottom__right__datetime{
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 5px;
                font-weight: bold;
                    @media screen and (min-width: 800px) {
                    font-size: 24px;
                    line-height: 32px;
                    margin-bottom: 10px;
                    }
                }
                &__bottom__right__socialtitle{
                text-transform: uppercase;
                margin-bottom: 10px;
                }
                
    }
.cartModal{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    overflow-y: auto;
     @media screen and (min-width: 768px){   
    display: flex;
    flex-direction: row;
    top: 0;
     }
    &__left{
    background: #efefef;
    padding: 20px;
        @media screen and (min-width: 768px){  
    padding-left: 133px;
    padding-right:133px;
    width: 70%;
        }
        
        &__close__btn{
        background: #FFFFFF;
        border-radius: 60px;
        outline: none;
        border: none;
        display: flex;
        padding: 8px;
        align-items: center;
         @media screen and (min-width: 768px){ 
          margin-top: 50px;
          padding: 13px;
         }
        }
        &__close__btn__icon{
        display: block;
         &__svg{
         display: block;
         }
        }
        &__event__name{
        margin-top: 11px;
        font-size: 14px;
        font-weight: bold;
        color: #12122C;
        margin-bottom: 10px;
         @media screen and (min-width: 768px){ 
         margin-top: 33px;
        font-size: 36px;
         }
        }
        &__event__date{
        text-transform: uppercase;
        font-size: 10px;
        color: #4F4F4F;
        margin-bottom: 25px;
        letter-spacing: 0.5px;
        @media screen and (min-width: 768px){ 
         margin-bottom: 75px;
        font-size: 18px;
         }
        }
    &__event__ticket{
            @media screen and (min-width: 768px){ 
            width: 85%;
            }
        &__info{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 2px;
                font-size: 14px;
                 @media screen and (min-width: 768px){ 
                    font-size: 18px;
                    }
            &__name{
            width: 33%;
            font-size: 14px;
                 @media screen and (min-width: 768px){
                 font-size: 24px;
                 }
            }

            &__price{
            width: 33%;
            font-weight: bold;
            @media screen and (min-width: 768px){
            font-size: 24px;
            padding-left: 15%;
                 }
            }
            &__button{
            width: 33%;
            display: flex;
            justify-content: flex-end;
                &__count{
                font-weight: bold;
                @media screen and (min-width: 768px){
                margin: 5px;
                }
                }
                &__operator{
                outline: none;
                border: none;
                }
            }
            &__line{
            
            }
        }
        
    }
    &__event__endtime{
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #828282;
    @media screen and (min-width: 768px) { 
    font-size: 14px;
    line-height: 28px;
    }
    }
    }
    &__right{
    background: #ffffff;
    padding: 20px;
    margin-top: -3px;
        @media screen and (min-width: 768px) {    
    width: 30%;
    padding: 50px;
        }
        &__title{
        font-size: 10px;
        line-height: 11px;
        letter-spacing: 0.065em;
        text-transform: uppercase;
        @media screen and (min-width: 768px) {    
            font-size: 18px;
        line-height: 22px;
        }
        }
        &__divider{
        margin: 10px 0;
        @media screen and (min-width: 768px) {    
            margin: 30px 0;
        }
        }
        &__ticket{
        display: flex;
        justify-content: space-between;
        font-size: 10px;    
        margin-bottom: 12px;
            @media screen and (min-width: 768px) {    
            font-size: 14px;    
            margin-bottom: 20px;
            }
            &__name{
                font-weight: bold;
            }
            &__price{
                border-radius: 4.65425px;
            }
        }
        &__checkout{
                &__subtotal{
                display: flex;
                justify-content: space-between;
                margin-bottom: 2px;                
                font-size: 10px;
                @media screen and (min-width: 768px) { 
                    margin-bottom: 20px;
                    font-size: 14px; 
                }
                    &__title{
                    font-weight: bold;
                    }
                }
                &__vat{
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                @media screen and (min-width: 768px) { 
                    margin-bottom: 20px;
                    font-size: 14px; 
                }
                    &__title{
                    font-weight: bold;
                    }
                }
                &__total{
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                text-transform: uppercase;
                @media screen and (min-width: 768px) { 
                    margin-bottom: 20px;
                }
                    &__title{
                    font-weight: bold;
                    font-size: 12px;
                    @media screen and (min-width: 768px) { 
                    font-size: 14px; 
                }
                    }
                    &__price{
                    font-size: 16px;
                    font-weight: bold;
                    @media screen and (min-width: 768px) { 
                    font-size: 24px; 
                }
                    }
                }
        }
        &__button{
        margin: 15px 0;
        text-align: center;
        padding: 9px;
        min-width: 40%;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 10px;
        @media screen and (min-width: 800px) { 
                    min-width: 100%;
                    font-size: 14px;
                    margin: 30px 0;
                    padding: 18px;
                    align-items: center; 
                }
        }
        &__customerProtection{
        display: flex;
        align-items: center;
            &__icon{
            margin-right: 10px;
            }
            &__text{
                &__top{
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0.9px;
                color: #333333;
                
                }
                &__bottom{
                font-size: 13px;
                line-height: 14px;
                letter-spacing: 0.5px;
                color: #828282;
                }
            }
        }
    }

}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>