<template>
    <div class="slider-wrap">
        <swiper class="swiper" ref="mySwiper" 
            :options="swiperOptions" 
            @slideChange="slideChangeTransitionStart"
        >
            <swiper-slide><img src="../assets/img/bnn1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn4.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn6.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/bnn7.jpg" alt=""></swiper-slide>
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
		name: 'BnnSlider',
		components: {
			Swiper,
			SwiperSlide
		},
		methods: {
			slideChangeTransitionStart() {
				console.log(this.swiper.activeIndex); //현재 index값 얻기
			}
		},
		data() {
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
    height: 118px;
    border-radius: 10px;
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