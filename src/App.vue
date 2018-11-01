<template>
  <div id="app">
    <router-view style="width:100%;height:auto" ></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style >
@media only screen and (min-width: 320px) {
html{
font-size: 52.5%;
   }

}
@media only screen and (min-width: 375px) {
html{
font-size: 62.5%;
   }

}
@media only screen and (min-width: 414px) {
html{
font-size: 72.5%;
   }

}
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption
{
		 padding:0; 
		 margin:0;
		 font-style: normal;
		 text-decoration:none;
		 list-style-type: none;
		 border:none;
     box-sizing:border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
