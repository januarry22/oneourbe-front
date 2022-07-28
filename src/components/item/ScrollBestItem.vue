<template>
  <div>
       <ul class="video-list" v-dragscroll>
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
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  //eslint-disable-next-line
  name: 'ScrollBestItem',
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
        reviews: [],
        loadNum: 0,
        noticeList:[]
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
.video-list .img{
  max-height: 250px;
}
.info{
    padding: 10px;
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

.discount{
    color: #36C5F1;
    font-weight: bold;
    margin-right: 5px;
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
