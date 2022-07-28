<template>
  <div class="index">
      <b-tabs class="slide-menu">
       <b-tab title="실시간 베스트" active>
          <p class="alive">2022.07.28 기준</p>
         <SearchBestItem></SearchBestItem>
       </b-tab>
        <b-tab title="역대 베스트">
     
         <SearchBestItem></SearchBestItem>
        </b-tab>
      </b-tabs>
  </div>
</template>

<script>
import SearchBestItem from '@/components/item/SearchBestItem';
import { BIcon } from 'bootstrap-vue'

export default {
  name: 'StoreBest',
  components: {
    SearchBestItem
  },
  directives: {
  },
   created: function () {
    },
  methods: {
    slideIndex() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
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
</style>
