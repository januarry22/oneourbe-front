<template>
  <div class="index"> 
  <div class="banner">
      <img src="../../assets/img/bnn1.jpg" alt="오늘의집배송">
  </div>
      <!-- <b-tabs class="slide-menu">
       <b-tab title="{{item.title}}" v-for="(item,id) in category" :key="id">
       </b-tab>
      </b-tabs> -->
       <b-tabs class="slide-menu">
       <b-tab title="전체" active>
       </b-tab>
        <b-tab title="가구">
        </b-tab>
        <b-tab title="패브릭">
        </b-tab>
        <b-tab title="가전">
        </b-tab>
      </b-tabs>
         <SearchBestItem></SearchBestItem>
  </div>
</template>

<script>
import MypageBanner from '@/components/banner/MypageBanner';
import SearchBestItem from '@/components/item/SearchBestItem';
import { BIcon } from 'bootstrap-vue'

export default {
  name: 'StoreTodayPrice',
  components: {
    SearchBestItem,
    MypageBanner
  },
  directives: {
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
    }
  },

}
</script>
<style scoped>
.alive{
    color: #acacac;
    font-size: 12px;
    padding: 15px 0 0 24px;
}
.banner{
    height: 130px;
    width: 100%;
}
.banner > img{
    height: 100%;
    width: 100%;
}
</style>
