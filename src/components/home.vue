<template>
  <div class="homePage">

<!-- <mt-header style="height:2.5rem" title="leci" fixed>
  <router-link tag="div" :to="'/city/'+setCityId" slot="right">
  <mt-button size="normal" >确定</mt-button>
  </router-link>
</mt-header> -->
<headBar  head-title='lecccc' sure=true pathTo='/city/' :params='setCityId'>
  </headBar> 
<mt-cell  @click.native="show_citiesList_state()"  title="当前定位" label="定位不准时，请在城市列表中选择" style="border-bottom:2px solid rgb(227,145,110); " is-link >
    <span style="font-size:1.3rem;line-height:3rem; ">{{setCity ? setCity : '无'}}</span>
</mt-cell>
        
<mt-index-list v-show="show_citiesList">
  <mt-index-section  v-for="(item, key, index)  in sortallCities" :key="index" :index="key">
    <mt-cell  v-for="city in item" :key="city.id" :title="city.name" @click.native="resetCity(city)"></mt-cell>
  </mt-index-section>
</mt-index-list>
  </div>
</template>

<script>
import {allcities,setcities} from "../api/getData.js";
import headBar from './common/head.vue'
export default {
  data() {
    return {
      cities: [],
      show_citiesList: false,
      setCity:'',
      setCityId:'',
    };
  },
  components:{
    headBar,
  },
  methods:{
    show_citiesList_state(){
      this.show_citiesList=!this.show_citiesList
    },
    resetCity(city){
      let data = {id:city.id,
      name:city.name}
      this.setCityId = data.id;
      this.setCity = data.name;
    }
  },
  computed: {
    sortallCities() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.cities[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.cities[String.fromCharCode(i)];
        }
      }
      return sortobj;
    },
    
  },
  created() {
    allcities().then(res => {

      this.cities = res.data;
    });
    setcities().then(res=>{
      let data = {id:res.data.id,
      name:res.data.name}
      this.setCity = data.name;
      this.setCityId = data.id;

    })
  },
  beforeRouteLeave:function(to, from, next) {
    if(!this.setCity){next(false);}else{
    next();}
  
  },
};
</script>

<style scoped>
.homePage {
  height: auto;
  margin-top:2.5rem;
}
 .head_logo{
   width:2.3rem;
   height:0.7rem;
        left: 0.4rem;
        font-weight: 400;
    }
</style>
