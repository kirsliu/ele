<template>
    <div>
   <headBar class="shop_head" goBack=true >
   </headBar>

   <div class="shop_detail_head">
       <div class="shop_icon">
       <img :src="shopInfo.imgUrl" alt="">
</div>
<div class="shop_info">
    <h4>{{shopInfo.name}}</h4>
    <p>公告:{{shopInfo.promotion}}</p>
    <p style="color:#666">配送费：{{shopInfo.deliveryFee}}￥ / {{shopInfo.category}}</p>
</div>
   </div >

    </div>
</template>
<script>
import headBar from './common/head.vue';
import {shopDetails,foodMenu} from '../api/getData.js'
export default {
data(){
    return{
        shopInfo:'',
        imgBaseUrl:'http://elm.cangdu.org/img/',
    }
},
components:{
    headBar,
},
computed:{
    shopId(){
    return this.$route.query.id
    },
    
    geohash(){
    return  this.$route.query.geohash
    }
},
created(){
    shopDetails(this.shopId,'39.98129','116.37421').then(res=>{
        let data =res.data;

        let info ={
            address:data.address,
            category:data.category,
            deliveryFee:data.float_delivery_fee,
            name:data.name,
            promotion:data.promotion_info,
            imgUrl:this.imgBaseUrl+data.image_path,
        }
        this.shopInfo = info;
    })
    foodMenu(this.shopId).then(res=>{})
},
}
</script>
<style lang="scss" scoped>
@import  '../style/mixin.scss';
.shop_head{height:7rem; background: $color-primary;}
.shop_detail_head{@include wh(100%,auto); position:relative;
.shop_icon{
@include wh(6rem,6rem);
position: absolute;
left: 50%;
transform: translate(-50%,-70%);
box-shadow: 3px 3px 10px 1px #666;

img{@include wh(100%,100%)}     
}
.shop_info{@include wh(100%,5rem);  text-align: center; padding-top:3rem;
*{padding:0.3rem;}
h4{font-size:2.5rem;}
}

}
</style>


