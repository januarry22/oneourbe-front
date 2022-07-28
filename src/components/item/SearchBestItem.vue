<template>
<div class="content">
  
      <section class="section4">
       <ul class="best-item">
            <li v-for="(review,id) in reviews" :key="id">
              <div class="img">
                <!-- <img :src="require(`@/assets/img/${item.img}`)" />  -->
              <img src="../../assets/img/section5-6.jpg" alt="오늘의집배송">
                <button class="item-bookmark">
                  <b-icon class="bookmark" icon="bookmark"></b-icon>
                  <b-icon class="bookmark" icon="bookmark-fill"></b-icon>
                </button>
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
      <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
      </section>
          </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: 'SearchBestItem',
  components: {
    InfiniteLoading
  },
  created: function () {
  },
  methods: {
     infiniteHandler($state) {
            this.$axios.post('/api/v1/noti',
                {
                  "type" : "CS_NOTI"
                }
            ).then(res => {
                    if(res.data.totalPages == this.loadNum){
                        $state.complete();
                    }else{
                        setTimeout(() => {
                            const data = res.data.data;
                            for(let key in data){
                                this.reviews.push(data[key])
                            }
                            this.loadNum++;
                            $state.loaded();
                        }, 1000)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
  },
  data: function () {
    return {
        reviews:[
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
      ],
        loadNum: 0
     }
  },

}
</script>
<style scoped>
.list-wrap > li{
    padding: 5px;
}
.video-photo .order .num span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(6%,50%);
    font-weight: bold;
    color: #ffffff;
    background-color: #FE7676;
}
.bookmark{
    width: 18px;
    height: 18px;
}
.best-item{
  padding: 25px;
}
.best-item > li {    
  border-bottom: 1px solid;
  border-color: #e4e4e4;
  padding: 0 0 20px 0;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.best-item .img{
    max-height: 150px;
    width: 40%;
}
.img > img{
    width: 100%;
    height: 100%;
}
.info{
    padding: 10px;
    width: 60%;
}
.info > p{
    font-size: 13px;
    color: #928f8f;
    margin: 10px 0 5px 0;
}
.info .name{
    font-size: 14px;
    color: #282828;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 97%;
}
.price-wrap{
  display: flex;
  margin: 7px 0 7px 0;
}
.price{
    font-weight: bold;
    font-size: 18px;

}
.discount{
    color: #36C5F1;
    font-weight: bold;
    margin-right: 5px;
    font-size: 18px;
}
.review-wrap{
  margin: 5px 0 5px 0;
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
.tag{
  margin: 5px 0 5px 0;
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
