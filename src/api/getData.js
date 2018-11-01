import axios from 'axios'

//获取全部城市
export const allcities = ()=>{
return axios.get('/v1/cities?type=group')
}

//获取定位城市
export const setcities = ()=>{
    return axios.get('/v1/cities?type=guess')
    }

//通过城市id获取城市
export const currentcity = number =>  {
    return axios.get('/v1/cities/'+number);
}

//获取搜索地址
export const searchplace = (cityId, value) => {
    return axios.get(`/v1/pois?type=search&city_id=${cityId}&keyword=${value}`);
}

/**
 * 获取页面地址信息
 */

export const geoAddress = geohash => {
    return axios.get(`/v2/pois/?geohash=${geohash}`);
} 


/**
 * 获取页面食品分类列表
 */

export const foodTypes = (geohash,group_type) => {
    return axios.get(`/v2/index_entry?geohash=${geohash}&group_type=${group_type}&flags[]=F`);
}

/**
 * 获取msite商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
    return axios.get(`/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=${offset}&limit=20&extras[]=activities&keyword=&restaurant_category_id=${restaurant_category_id}&restaurant_category_ids[]=${restaurant_category_ids}&order_by=${order_by}&delivery_mode[]=${delivery_mode}`);

};

/**
 * 获取msite商铺详情
 */
export const shopDetails = (shopId, latitude, longitude) => {
    return axios.get(`/shopping/restaurant/${shopId}?latitude=${latitude}&longitude=${longitude}&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics`)
}

/**
 * 获取msite商铺商品
 */
export const foodMenu = restaurant_id => {
    return axios.get(`/shopping/v2/menu?restaurant_id=${restaurant_id}`)
}
