<template>
    <div class="footer">
    <h4 class="footer-copyright">
        {{ copyright }}
    </h4>
    <div class="footer-privacy">
    <h4>{{ termsandcon }}</h4>
    <h4 class="footer-privacy-policy">{{ privacypolicy }}</h4>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      termsandcon: 'Terms and Conditions',
      privacypolicy: 'Privacy Policy',
      copyright: 'Copyright 2019. Flutterwave inc'
    }
  }
}
</script>
<style lang="scss">
.footer{
  display: block;
  font-family: SFProDisplay;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.0028px;
  color: #4a4a4a;
  padding: 0;
  color: #4a4a4a;
  mix-blend-mode: normal;
    @media screen and (min-width: 800px) {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    line-height: 16px;
    letter-spacing: 0.0028px;
    color: #4a4a4a;
    padding: 0;
    color: #4a4a4a;
    mix-blend-mode: normal;
    margin: 0 241px;
  }
  &-privacy{
  display: block;
  align-items: center;
   @media screen and (min-width: 800px) {
    display: flex;
    text-align: center;
    margin-left: 48px;
   }
    &-policy{
    margin-left: 20px;
    }
  }
}
</style>
