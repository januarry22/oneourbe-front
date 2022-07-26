<template>
<div class="index">
      <div>
      <b-tabs class="slide-menu">
       <b-tab title="프로필" active>
         <MyProfile></MyProfile>
       </b-tab>
        <b-tab title="나의 쇼핑">
         <MyShopping></MyShopping>
        </b-tab>
      </b-tabs>
      </div>
    </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import MyProfile from '@/components/mypage/MyProfile';
import MyShopping from '@/components/mypage/MyShopping';

export default {
  //eslint-disable-next-line
  name: 'MyPage',
  components: {
    BIcon,
    MyProfile,
    MyShopping
  },
   created: function () {
  },
  methods: {
    
  },
  data: function () {
    return {
    }
  }
}
</script>


<style scoped>
.index{
    background-color: #ffffff;
}
.slide-menu .nav.nav-tabs {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 10px;
    justify-content: space-around;
}


</style>
