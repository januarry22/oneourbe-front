<template>
    <div class="slider-wrap" >
        <swiper class="swiper" ref="mySwiper" 
            :options="swiperOptions" 
          
        >
            <swiper-slide  v-for="(item,id) in banner" :key="id">
                <img :src="require(`@/assets/img/${item.img_url}`)" @click="bannerLink(item.link_url)"/> 
                </swiper-slide>
        </swiper>
        <div class="pagination-wrap">
            <div class="swiper-pagination" slot="pagination"></div>
            <span class="more">+</span>
        </div>
    </div>
</template>

<script>
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'StoreBanner',
        data: function () {
            return {
            swiperOptions: {
					loop: true,
					autoplay:true,
                    speed: 500,
					pagination: {
						el: '.swiper-pagination',
                        type: "fraction"
					},                   
				},
            banner: []
            }
            
        },
        components: {
			Swiper,
			SwiperSlide
		},
        created: function () {
            this.getList()
        },
        methods: {
            // slideChangeTransitionStart() {
			// 	console.log(this.swiper.activeIndex); //현재 index값 얻기
			// },
            getList: function () {
            // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
            this.$axios.get('/api/v1/banner').then(response => {
                this.banner = response.data.data
              //  console.log('### data: ' + JSON.stringify(this.banner,null,2))
            }).catch(error => {
                console.log(error)
            })
            },
            bannerLink: function(link){
                location.href=link
            }
        },
        computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper;
			}
		},
    }
</script>

<style  scoped>
.slider-wrap{position: relative;}
.swiper-container{
    height: 200px;
}
.swiper-container img{width: 100%; height: 100%;}
.pagination-wrap{
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    right: 18px; bottom: 8px;
    width: 70px; height: 26px;
    border-radius: 30px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper-pagination{
    color: #BCBCBC;
    font-size: 12px;
    position: initial;
    bottom: auto; left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px; width: 65%;
}
.swiper-pagination >>> span{
    display: block;
    margin: 0 5px;
    color: #BCBCBC;
    font-size: 12px;
}
.swiper-pagination >>> .swiper-pagination-current{color: #ffffff; font-weight: bold;}
.more{
    font-size: 20px;
    color: #ffffff;
    font-weight: 300;
}
</style>