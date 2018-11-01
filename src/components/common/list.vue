<template>
    <div>
        <ul class="list">
        <li v-for="(item,index) in list" :key="index" ><div class="info" @click="deal(item)"><p class="title">{{item.name}}</p><p class="content">{{item.address}}</p></div><span class="icon" v-if="delete_icon" @click="deleteItem(item,index)"><img src="../../img/删除.svg" alt=""></span></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            }
    },
     props: ['list','delete_icon'],
    methods:{
        deal(item){
                this.$emit('listItem',item);
        },
        deleteItem(item){
            console.log(item)

                this.$emit('deleteItem',item);
        }
     }
     
}
</script>
<style scoped lang='scss'>
@import "../../style/mixin.scss";
.list li{margin:0.5rem; padding:0.5rem 1rem; border-bottom: 1px solid rgba(0,0,0,.1); @include flexb;
.info{@include wh(90%,3rem);

.title{ @include pell ; @include wh(100%,2rem) ;font-size:1.4rem;  } 
.content{@include pell ; @include wh(100%,1.8rem) ;font-size:1.2rem;}
}
.icon{display: flex; align-items:center;}
}

</style>

