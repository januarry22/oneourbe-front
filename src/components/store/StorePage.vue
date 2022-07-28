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
        <b-tab title="베스트"></b-tab>
        <b-tab title="오늘의딜"></b-tab>
        <b-tab title="반짝초특가"></b-tab>
        <b-tab title="리퍼마켓"></b-tab>
        <b-tab title="빠른배송">
          <csCenter></csCenter>
        </b-tab>
        <b-tab title="프리미엄"></b-tab>
        <b-tab title="기획전"></b-tab>
      </b-tabs> 
  </div>
</template>

<script>
import csCenter from '@/components/cs/csCenter.vue';
import StoreSection from '@/components/store/StoreSection.vue';
import Footer from '@/components/Footer.vue';
import BottomNav from '@/components/BottomNav.vue';
import { BIcon } from 'bootstrap-vue'
import { dragscroll } from 'vue-dragscroll'

export default {
  //eslint-disable-next-line
  name: 'StorePage',
  components: {
    BottomNav,
    Footer,
    BIcon,
    csCenter,
    StoreSection
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
