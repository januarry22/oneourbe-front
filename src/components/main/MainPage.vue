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
        <b-tab title="인기" active>
          <MainSection></MainSection>
        </b-tab>
        <b-tab title="팔로잉"></b-tab>
        <b-tab title="사진"></b-tab>
        <b-tab title="집들이"></b-tab>
        <b-tab title="노하우"></b-tab>
        <b-tab title="전문가집들이"></b-tab>
        <b-tab title="질문과답변">
          <csCenter></csCenter>
        </b-tab>
      </b-tabs> 
  </div>
</template>

<script>
import csCenter from '@/components/cs/csCenter.vue';
import MainSection from '@/components/main/MainSection.vue';
import Footer from '@/components/Footer.vue';
import BottomNav from '@/components/BottomNav.vue';
import { BIcon } from 'bootstrap-vue'
import { dragscroll } from 'vue-dragscroll'

export default {
  //eslint-disable-next-line
  name: 'MainPage',
  components: {
    BottomNav,
    Footer,
    BIcon,
    MainSection,
    csCenter
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
