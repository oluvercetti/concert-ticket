<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f2f2; 
}
.loading {
    display: flex;
    width: 100%;
    justify-content: center;
    height: auto;
}
.loading:after {
  content: " ";
  display: block;
  width: 60px;
  height: 60px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #F5A623 transparent #F5A623 transparent;
  animation: loading 1.2s linear infinite;
    @media screen and (min-width: 768) {
      width: 120px;
      height: 120px;  
    }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.button{
  min-height: 30px;
  min-width: 125px;
  background-color: #F5A623;
  font-size: 10px;
  color: #fff;
  border-radius: 4.06693px;
  box-shadow: 0 7px 3px -5px #777;
  border: none;
  text-transform: uppercase;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  outline: none;
    @media screen and (min-width: 8000px) {
    min-height: 30px;
    min-width: 250px;
    font-size: 12.2px;
    }
}
button:hover{
cursor: pointer;
}

h4{
font-weight: 300;
}

a{
text-decoration: none;
color: #333333;
}


img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
        border-radius: 6px;
    }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@font-face {
  font-family: "Panton";
  src: local("Panton"),
   url(./fonts/Panton/PantonDemo-Black.otf) format("opentype");
}
@font-face {
  font-family: "SFProDisplay";
  src: local("SFProDisplay"),
   url(./fonts/SFProDisplay/SFProDisplay-Regular.ttf) format("truetype");
}
</style>
