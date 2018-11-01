<template>
  <div>
   <mt-header :title="address">
      <mt-button slot="left" icon="back" @click.native="goBack()">返回</mt-button>
  </mt-header>
  <mt-swipe :auto="4000" style="height:7rem">
    <mt-swipe-item><div style="width:100%; height:100%; background:skyblue"></div></mt-swipe-item>
    <mt-swipe-item><div style="width:100%; height:100%;  background:pink"></div></mt-swipe-item>
    <mt-swipe-item><div style="width:100%; height:100%;  background:orange"></div></mt-swipe-item>
  </mt-swipe>
  <nav>
    <div class="food_list">
      <router-link tag="div" class="food_type" :to="'/home'" v-for="(item,index) in foodTypes" :key="index">
      <img :src=" imgBaseUrl+item.image_url" alt="">
      <p class="food_type_title" >{{item.title}}</p>
      </router-link>
    </div>
  </nav>

  <shop-list style="border-top:0.5rem solid #efefef;"></shop-list>
<foot-guide></foot-guide>
</div>
</template>
<script>
  import {geoAddress,foodTypes} from '../api/getData.js'
  import footGuide from './common/footGuide.vue'
  import shopList from './common/shopList.vue'
  export default {
    data(){
      return{
        foodTypes:[],
        imgBaseUrl:'https://fuss10.elemecdn.com',
      }
    },
    methods:{
    goBack(){
      this.$router.go(-1);
    }
    
  },
  computed: {
    geohash(){
      return this.$route.query.geohash;
    },
    address(){
      return this.$route.query.data;
    }
  },
  created(){
      foodTypes(this.geohash,1).then(res=>{this.foodTypes = res.data.slice(0,8)})    
  },
  components:{
    footGuide,
    shopList,
  }

}

</script>

<style lang="scss" scoped>
img{width:80%;height:70%;}
.food_list{
  display:flex;
  flex-wrap:wrap;
  text-align:center;
.food_type{
  width:25%;
  box-sizing: border-box;
  padding:0.8rem;
  .food_type_title{font-size:0.7rem;}
}
}

</style>

