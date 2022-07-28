<template>
  <div>
      <div class="search-wrap">
        <div class="search">
          <b-icon icon="search"></b-icon>
          <input type="text" placeholder="통합검색 엔진">
        </div>

        <button> <b-icon icon="bookmark"></b-icon></button>
        <button class="cart">
          <b-icon icon="cart2"></b-icon>
          <b-badge>4</b-badge>
        </button>
      </div>
      <b-tabs class="slide-menu" v-dragscroll>
        <b-tab title="스토어홈">
          <StoreSection></StoreSection>
        </b-tab>
        <b-tab title="베스트">
          <StoreBest></StoreBest>
        </b-tab>
        <b-tab title="오늘의딜">
          <StoreTodayPrice></StoreTodayPrice>
        </b-tab>
        <b-tab title="반짝초특가"></b-tab>
        <b-tab title="리퍼마켓"></b-tab>
        <b-tab title="빠른배송">
        </b-tab>
        <b-tab title="프리미엄"></b-tab>
        <b-tab title="기획전"></b-tab>
      </b-tabs> 
  </div>
</template>

<script>
import StoreTodayPrice from '@/components/store/StoreTodayPrice.vue';
import StoreSection from '@/components/store/StoreSection.vue';
import StoreBest from '@/components/store/StoreBest.vue';
import { dragscroll } from 'vue-dragscroll'

export default {
  name: 'StorePage',
  components: {
    StoreSection,
    StoreBest,
    StoreTodayPrice
  },
  directives: {
    'dragscroll': dragscroll
  },
  created:function(){
    
  },
  methods: {
  },
  data: function () {
    return {
    }
  },

}
</script>
<style scoped>
  @import "../../assets/style.css";

  
</style>
