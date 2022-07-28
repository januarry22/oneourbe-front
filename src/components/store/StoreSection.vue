<template>

      <div class="content">
        <div class="banner">
           <BnnSlider></BnnSlider> 
        </div>
        <section class="section1">
          <ul class="top-menu">
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu1.png" alt="쇼핑하기">
              <p>인기템세일</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu2.png" alt="오늘의집배송">
                <p>트렌드발견</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu3.png" alt="평수별집구경">
              <p>빠른배송</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu4.png" alt="공간별사진">
              <p>리퍼마켓</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu5.png" alt="빠른시공상담">
              <p>프리머엄</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu6.png" alt="오늘의집이사">
              <p>오!굿즈</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu7.png" alt="오늘의딜">
              <p>반려동물</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu8.png" alt="설치/수리대행">
              <p>원플원샵</p>
            </a></li>
             <li><a href="#">
              <img src="../../assets/img/icon-top-menu8.png" alt="설치/수리대행">
              <p>유아동</p>
            </a></li>
             <li><a href="#">
              <img src="../../assets/img/icon-top-menu8.png" alt="설치/수리대행">
              <p>신상특가</p>
            </a></li>
          </ul>
        </section>

        <section class="section2 list-wrap">
          <div class="find-title">
            <h2>어떤 상품을 찾나요?</h2>
            <button class="category">카테고리 전체 <b-icon icon="chevron-right"></b-icon></button>
          </div>
        <ul class="top-menu">
            <li class="find" v-for="(item,id) in findMenu" :key="id"><a href="#">
              <img src="../../assets/img/icon-top-menu1.png" alt="쇼핑하기">
              <p>{{item.title}}</p>
            </a></li>
          </ul>
        </section>

        <section class="section4 list-wrap video-photo">
          <div class="find-title">
            <h2>오늘의 딜</h2>
            <button class="today">더보기</button>
          </div>
          <SlideItem></SlideItem>

        </section>

        <section class="section4 list-wrap video-photo">
          <div class="find-title">
            <h2>최근 본 상품</h2>
          </div>
          <SlideItem></SlideItem>

        </section>

        <section class="section4 list-wrap video-photo">
          <div class="find-title">
            <h2>내가 본 상품의 연관 상품</h2>
            <button class="today">더보기</button>
          </div>
          <SlideItem></SlideItem>

        </section>


        <section class="section4 list-wrap video-photo">
          <div class="find-title">
            <h2>(닉네임) 님을 위한 상품</h2>
            <button class="today">더보기</button>
          </div>
          <SlideItem></SlideItem>
        </section>


        <section class="section7 list-wrap">
          <div class="find-title">
            <h2>스토어 실시간 인기 검색어</h2>
            <button class="today">더보기</button>
          </div>
        </section>

        <section class="section8 list-wrap">
          <div class="find-title">
            <h2>인기상품</h2>
          </div>
          <ScrollBestItem></ScrollBestItem>
        </section>
      </div>
</template>

<script>
import ScrollBestItem from '@/components/item/ScrollBestItem';
import SlideItem from '@/components/item/SlideItem';
import BnnSlider from '@/components/banner/StoreBanner';
import { BIcon } from 'bootstrap-vue'
import { dragscroll } from 'vue-dragscroll'
import BestTabItem from "@/components/BestTabItem.vue";

export default {
  name: 'StoreSection',
  components: {
    BIcon,
    BnnSlider,
    BestTabItem,
    SlideItem,
    ScrollBestItem
  },
  directives: {
    'dragscroll': dragscroll
  },
   created: function () {
            this.getCategory()
        },
  methods: {
    slideIndex() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
    getCategory: function () {
            this.$axios.get('/api/v1/category/main').then(response => {
                this.category = response.data.data
               // console.log('### data: ' + JSON.stringify(this.companyInfo,null,2))
            }).catch(error => {
                console.log(error)
      })
    }
  },
  data: function () {
    return {
      category:[],
      findMenu:[
        {
          title: '가구',
          text: '이건 꼭! 추천리스트',
          img: 'section3-1.jpg'
        },
        {
          title: '패브릭',
          text: '홈오피스 힙하게 완성했어요',
          img: 'section3-2.jpg'
        },
        {
          title: '가전',
          text: '욕실 살림템 10 #내돈내산',
          img: 'section3-3.jpg'
        },
        {
          title: '유아/아동',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: 'ㅈㅎ묭',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '주방요품',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '데코/식물',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '수납/정리',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '생활용품',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '생필품',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '공구/DIY',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '인테리어시공',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '반려동물',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '캠핑용품',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '실내운동',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
         {
          title: '렌탈',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
      ]
    }
  },

}
</script>
<style scoped>
  @import "../../assets/style.css";

.top-menu > li{
    width: 20%;
}

.top-menu > .find{
    width: 23%;
    background-color: #e9e7e7; 
    margin: 0 1px 13px 1px;
    padding: 8px;
}
.section1{
    padding: 20px 0 20px 0;
}
.find-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.category{
    border: 1px solid #36C5F1;
    padding: 5px 8px 5px 13px;
    font-size: 12px;
    border-radius: 2px;
    font-weight: bold;
    color: #36C5F1;
}
.find{
    color: #a1a1a1;
    font-weight: bold;
    font-size: 14px;
}
</style>
