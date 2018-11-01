<template>
<div class="shopList">
  <header class="shopList_title"> <img src="../../img/订单.svg" alt=""><span>附近商店</span></header>
<ul class="shopList_ul">
    <router-link tag="li"  v-for="item in shop_list" :key="item.id" :to="{path:'/shop',query:{geohash:item.latitude+','+item.longitude,id:item.id}}" class="shop_item">
    <div class="shop_item_left">
        <img :src="imageBaseUrl+item.image_path" alt="">
    </div>
  <div class="shop_item_right">
      <header class="shop_item_header">
      <span>{{item.name}}</span>
      <ul class="shop_supports">
          <li v-for="(icon,index) in item.supports" :key="index" class="shop_support_icon" >{{icon.icon_name}}
          </li>
          </ul>     
      </header>

      <div class="shop_sell">
          <span>月售{{item.recent_order_num}}单</span>
          <span v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
          </div>
          
      <div class="shop_delivery">
          <span>￥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}</span>
          <span>{{item.distance}}/{{item.order_lead_time}}</span>
          </div>
    </div>
    </router-link>
    </ul>    
    
</div>    
</template>
<script>
import { shopList } from "../../api/getData.js";

export default {
  data() {
    return {
      shop_list: [],
      imageBaseUrl: "http://elm.cangdu.org/img/",
      geoHash:'22.51633, 113.04115, 0',
    };
  },
  created() {
    shopList(22.51633, 113.04115, 0).then(res => {
      this.shop_list = res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";

.shopList {
  margin-bottom:4rem;
    .shopList_title{
    width:100%;
    height:1.5rem;
    padding:0.5rem 1rem;
    img{width:1.5rem;height:1.2rem;margin-right:0.5rem}
  }
  width: 100%;
  margin-top: 1rem;
  .shopList_ul {
      padding: 0;
    .shop_item {
      @include flexb;
      width: 100%;
      padding: 1rem 1rem;
      list-style-type: none;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      .shop_item_left {
        width: 20%;
        height: 100%;
        img {
          @include wh(6rem,6rem);
        }
      }
      .shop_item_right {
        width: 75%;
        height: 100%;
      .shop_item_header {
        display: flex;
        justify-content: space-between;
        span{font-size:1.5rem;font-weight: 800;}
        .shop_supports {
          display: flex;
          .shop_support_icon {
            width: 1.2rem;
            height: 1.2rem;
            background:#666;
            text-align: center;
            list-style-type: none;
            @include fsc(0.5rem, #fff);
          }
        }
      }
    .shop_sell{
        @include flexb;
     & span:nth-child(1){@include fsc(0.2rem,#666)}
     & span:nth-child(2){@include fsc(0.2rem,skyblue); padding:0 0.2rem; border:1px solid skyblue;}
     padding:0.5rem 0;
    }
    .shop_delivery{@include flexb;
    @include fsc(0.1rem,#666)

    }
    }
      }

  }
}
</style>


