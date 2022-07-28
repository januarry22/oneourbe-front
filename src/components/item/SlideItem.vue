<template>
    <ul class="video-list" v-dragscroll>
            <li v-for="(item,id) in list5" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
                <div class="order">
                  <div class="num">
                    <b-badge>3일 남음</b-badge>
                  </div>
                </div>
              </div>    
              <div class="info">
                  <p>플러스라인</p>
                  <p class="name">[오늘의딜] 무타공메탈자석 도어스토퍼 실내현관 실내현관 실내현관 실내현관</p>
                  <div class="price-wrap">
                      <p class="discount">30%</p>
                      <p class="price">15,900</p>
                  </div>
                  <div class="review-wrap">
                  <p class="score"><b-icon icon="star-fill" style="color:#36C5F1;margin-right: 4px;"></b-icon>4.6</p>
                  <span class="review"> 리뷰 60</span>
                  </div>
                  <div class="tag">
                  <b-badge class="free">무료배송</b-badge> 
                  <b-badge class="promotion">특가</b-badge>
                </div>   
              </div>
                     
            </li>
          </ul>
</template>

<script>
import { dragscroll } from 'vue-dragscroll'

export default {
  //eslint-disable-next-line
  name: 'SlideItem',
  components: {
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
        list5:[
        {
          userId: 'BlauesHaus',
          videoLength: '00:34',
          img: 'section5-1.jpg'
        },
        {
          userId: 'ngray',
          videoLength: '00:54',
          img: 'section5-2.jpg'
        },
        {
          userId: 'xoxosooz',
          videoLength: '00:24',
          img: 'section5-3.jpg'
        },
        {
          userId: 'YelloHome',
          videoLength: '00:28',
          img: 'section5-4.jpg'
        },
        {
          userId: 'fromtak',
          videoLength: '00:14',
          img: 'section5-5.jpg'
        },
        {
          userId: 'deat',
          videoLength: '00:28',
          img: 'section5-6.jpg'
        },
        {
          userId: 'Koh_home',
          videoLength: '00:41',
          img: 'section5-7.jpg'
        },
        {
          userId: '하하핳30',
          videoLength: '00:52',
          img: 'section5-8.jpg'
        },
        {
          userId: 'elleenjiml',
          videoLength: '00:26',
          img: 'section5-9.jpg'
        },
      ]
     }
  },

}
</script>
<style scoped>
  @import "../../assets/style.css";

.video-photo .order .num span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(6%,50%);
    font-weight: bold;
    color: #ffffff;
    background-color: #FE7676;
}
.video-photo .video-list .img{
    height: 145px;
    width: 145px;
}
.info > p{
    font-size: 10px;
    color: #928f8f;
    margin: 10px 0 5px 0;
}
.info .name{
    font-size: 12px;
    color: #282828;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130px;
}
.price-wrap{
  display: flex;
    margin: 7px 0 7px 0;
}

.discount{
    color: #36C5F1;
    font-weight: bold;
    margin-right: 5px;
}
.review-wrap{
  display:flex;
}
.score{
    font-weight: bold;
    font-size: 12px;
    margin: 0 5px 0 0;
}
.review{
    color: #928f8f;
    font-size: 12px;
}
.promotion{
  background-color: #FE7676;
  color: white;
  font-size: 10px;
  margin-right: 4px;
}
.free{
  background-color: #dddddd;
  color: #928f8f;
  font-size: 10px;
  margin-right: 4px;

}
</style>
