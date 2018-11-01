import home from '../components/home.vue'
import city from '../components/city.vue'
import mainPage from '../components/main.vue'
import shopDetail  from '../components/shop.vue'
export default[ 
    {path:'/',component:home},
    {path:'/city/:cityId',component:city},
    {path:'/main',component:mainPage},
    {path:'/shop',component:shopDetail},
]