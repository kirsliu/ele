<template>
<div>  
  <mt-tabbar class="foot_guide" v-model="selected" fixed>
  <mt-tab-item id="tab1">
       <img src="../../img/外卖-2.svg" alt="">
    <p>外卖</p>
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img src="../../img/搜索.svg" alt="">

    <p>发现</p>
  </mt-tab-item>
  <mt-tab-item id="tab3">
     <img src="../../img/订单.svg" alt="">
    <p>订单</p>
  </mt-tab-item>
  <mt-tab-item id="tab4">
   <img src="../../img/wode.svg" alt="">

    <p>我的</p>
  </mt-tab-item>
</mt-tabbar>
</div>

</template>
<script>
export default {
  data(){
    return{
     selected:'',
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.foot_guide{background:$color-primary;

@include wh(100%,4rem)
}
img{@include wh(25%,1.2rem);
 padding:0.3rem}
p{margin:0.2rem 0 0 0;}
</style>

