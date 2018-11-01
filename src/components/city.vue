<template>
    <div>
<headBar changeCity=true :head-title='curCity'  pathTo='/' >
  </headBar> 
<section style="margin-top:4rem; padding:0 1rem ">
<mt-field style="border:1px solid skyblue; " placeholder="请输入地址" type="text" v-model="address"></mt-field>
  <mt-button style="margin-top:2rem; height:1.8rem padding:1rem 0" type="primary" size="large" @click.native="btn_searchplace(cityId,address)" >提交</mt-button>
</section>
<section style="margin-top:0.8rem ">
    <section v-if="show_history">
        <section class="history_title">
    <p class="search_history_title" > 搜索历史</p>
    <p @click="deleteAllHistory">清空历史</p>
    </section>
 <lists :list='search_history_list' delete_icon=true  @listItem="nextPage" @deleteItem="deleteHistory"></lists>
    </section>
    <p v-if="result_hit" class="noResult-hit">无搜索结果</p>
    <ul class="resultList" v-if="!result_hit">
 <lists :list='searchplace_result' delete_icon=true @listItem="nextPage"></lists>
        
        <!-- <li v-for="(item,index) in searchplace_result" :key="index" ><p class="ellipsis">{{item.name}}</p><p class="ellipsis" style="color:#666">{{item.address}}</p></li> -->
    </ul>
</section>
    </div>
</template>

<script>
import {currentcity,searchplace} from "../api/getData.js";
import {setStore,getStore,removeStore} from "../api/utils.js";
import headBar from './common/head.vue';
import lists from './common/list.vue';
export default {
    data(){
        return{
            cityId:'',
            address:'',
            curCity:'',
            searchplace_result:[],
            result_hit:false,
            search_history_list:[],
            show_history:false,
        }
    },  
    components:{
        headBar,
        lists,
    },
    created(){
        this.cityId = this.$route.params.cityId;
        currentcity(this.cityId).then(res=>{
         this.curCity = res.data.name 
        })
        this.search_history_list = getStore('address_store') ? JSON.parse(getStore('address_store')) : []
        this.search_history_list.length==0 ? this. show_history = false : this. show_history = true;

    },
    methods:{
        btn_searchplace(id,value){
            if(this.address){
                searchplace(id,value).then(res=>{
                    if(res.data.length>0){
                        this.result_hit=false;
                    this.searchplace_result = res.data;
                    }else{
                        this.result_hit=true;
                    }
                })    
                this.show_history = false;        
        }else{
            return
            }
    },
    nextPage(item){
        let geohash = item.geohash,
         address = item.address,
         name = item.name;
        let data = address || name ; 
        this.$router.push({path:'/main',query:{geohash,data}})

        this.recordAddress(item);
    },
    recordAddress(item){
        let name = item.name
        , address = item.address
         , address_array = []
         , getAddress =  getStore('address_store')
         , check_repeat = false

         if(!getAddress)
         {
             address_array = [{name:address}];
        setStore('address_store',address_array)

         }else{
                  address_array=JSON.parse(getAddress);   

        address_array.forEach((item=>{
           if(item.name == address){

               check_repeat = true;
           }
        }))
           if(check_repeat || !address)return;
        address_array.push({name:address});
        setStore('address_store',address_array)
         }

    },
    deleteAllHistory(){
        removeStore('address_store');
         this.search_history_list = getStore('address_store') ? JSON.parse(getStore('address_store')) : []
         this. show_history = false
        
    },
    deleteHistory(item,index){

         let arr = JSON.parse(getStore('address_store')); 
        arr.splice(index-1,1)
         setStore('address_store',arr);
                this.search_history_list = getStore('address_store') ? JSON.parse(getStore('address_store')) : []
        this.search_history_list.length==0 ? this. show_history = false : this. show_history = true;
    }
  
},
computed:{
          

},
}
</script>
<style lang="scss" scoped>
@import '../style/mixin';

*{padding:0}
p{margin:0.8rem 0.5rem;}
.resultList li{margin-bottom:0.5rem; padding:0.3rem 0.5rem 0.3rem 0.5rem; border-bottom: 1px solid #ccc}
.ellipsis{ @include pell ; font-size:1.5rem;} 
.noResult-hit{margin:3rem; @include fsc(2rem,#666); text-align:center}
.search_history_title{@include fsc(1.8rem,#666)}
.history_title{@include flexb;}
</style>

