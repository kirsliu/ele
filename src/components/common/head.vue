<template>
    <div>
<mt-header style="height:3rem" :title='headTitle' fixed>
  <router-link tag="div" :to="pathTo+params" slot="right" v-if="sure">
  <mt-button size="normal">确定</mt-button>
    </router-link>

<mt-button  slot="right" v-if="changeCity">  <router-link tag="div" :to="pathTo">切换城市</router-link></mt-button>
    <div  slot="left" @click="$router.go(-1)" v-if="goBack">
      <mt-button icon="back">返回</mt-button>
  </div>
</mt-header>
    </div>
</template>
<script>
export default {
     props: ['signinUp', 'headTitle','changeCity', 'goBack','sure','pathTo',"params"],
     
}
</script>
<style>

</style>

