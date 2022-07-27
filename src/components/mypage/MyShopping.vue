<template>
<div>
   <div class="list-wrap">
      <div class="cs-container">
        <div>
            <p class="light"><b-icon icon="credit-card2-front"></b-icon></p>
            <p class="auto-set">쿠폰 <strong>1</strong></p>
        </div>   
        <div>
            <p class="light"><b-icon icon="coin"></b-icon></p>
            <p class="auto-set"> 포인트 <strong>520</strong></p>
        </div>
        <div>
              <p class="light"><b-icon icon="trophy"></b-icon></p>
              <p class="auto-set"> 회원등급 <strong>WELCOME</strong></p>
        </div>
      </div>
    </div>
    <div class="list-wrap">
          <BnnSlider></BnnSlider>
    </div>


    <div class="list-wrap">
      <p><span class="list-font">진행중인 주문  <l>(최근 3개월)</l></span></p>
      <div class="cs-container">
        <div>
            <p class="auto">입금<br>대기</p>
            <p class="light">0</p>
        </div>   
          <b-icon icon="chevron-right"></b-icon>
        <div>
            <p class="auto"> 결제<br>완료</p>
            <p class="light">0</p>
        </div>
          <b-icon icon="chevron-right"></b-icon>
        <div>
              <p class="auto"> 배송<br>준비 </p>
              <p class="light">0</p>
        </div>
          <b-icon icon="chevron-right"></b-icon>
          <div>
              <p class="auto"> 배송중 </p>
              <p class="light">0</p>
        </div>
          <b-icon icon="chevron-right"></b-icon>
          <div>
              <p class="auto"> 배송<br>완료 </p>
              <p class="light">0</p>
        </div>
          <b-icon icon="chevron-right"></b-icon>
          <div>
              <p class="auto"> 리뷰<br>쓰기 </p>
              <p class="light">0</p>
        </div>
      </div>
    </div>

     <div class="cs-noti">
      <ul class="cs-notilist">
          <li  v-for="(menu,id) in menus" :key="id">
                <p>
                    {{menu.name}}
                    <span class="pclass"> {{menu.cnt}}</span>
               </p>
          </li>
      </ul>
    </div>
</div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import BnnSlider from '@/components/banner/MypageBanner';

export default {
  //eslint-disable-next-line
  name: 'MyProfile',
  components: {
    BIcon,
    BnnSlider
  },
   created: function () {
  },
  methods: {
    
  },
  data: function () {
    return {
       list1:[
        {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
         {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
         {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
         {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
        {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
        {
          title: '150만원으로 실속있게 꾸민',
          text: '자매가 사는 투룸',
          img: 'section1-1.jpg'
        },
        {
          title: '쿨톤 미드센트리&웜톤 앤티크',
          text: '건축 설계사의 방',
          img: 'section1-2.jpg'
        },
        {
          title: '깔끔하고 아늑한',
          text: '맥시멀리스트의 화이트&우드 홈',
          img: 'section1-3.jpg'
        },
        {
          title: '원룸을 이렇게?',
          text: '복도+거실+침실+주방으로 쪼갠 극강리모델링!',
          img: 'section1-4.jpg'
        },
      ],
            menus: [
              {
                'name': '주문배송내역 조회',
                'cnt' :0
              },
              {
                'name': '상품 스크랩북',
                'cnt' :0
              },
                 {
                'name': '나의 문의내역',
                'cnt' :0
              },
                 {
                'name': '나의 리뷰',
                'cnt' :0
              },
              {
                'name': '고객센터',
                'cnt' :0
              },
            ]
     }
  },

}
</script>
<style scoped>
  /* @import "../../assets/style.css"; */
.index{
    background-color: #ffffff;
}
.slide-menu{
    text-align: center;
}
.cs-container{    
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 65px;
    border-radius: 7px;
    margin: 3px;
}
.auto-set{
    font-size: 12px;
    color: #727578;
    display: flex;
    margin-top: 6px;
    flex-direction: column;
    align-items: center;
}
.auto-set > strong{
    font-size: 12px;
    color: #36C5F1;
    margin-top: 6px;
    font-weight: bold;
}
.auto{
    font-size: 12px;
    color: #727578;
    margin-top: 6px;
}
.light{
  font-weight: bold;
  color: #36C5F1;   
}
.cs-container > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:30%;
}
.cs-notilist > li {
    border-bottom: 1px solid #e7e7e7;
    height: 50px;
    font-size: 15px;
}
.cs-notilist > li > p {
    display: inline-block;
    margin: 15px;
    font-weight: bolder;
}
.cs-content{
  border-bottom: 1px solid #e7e7e7;
  justify-content: space-between;
  display: flex;
}
.cs-cont{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
}
.cs-cont > li {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.con-title{
    margin: 10px 20px 5px 0;
    font-weight: 500;
}
.cont{
    font-size: 13px;
    color: #928e8e;
    display: flex;
    align-items: center;
}
.cont  > img{
    max-width: 30px;
}
.tag{
    background-color: #e3e2e2;
    padding: 6px;
    border-radius: 6px;
    font-size: 13px;
    color: #716b6b;
    margin:3px;
}
.cs-search{
    background-color: #ffffff;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.btn1{
    border: 1px solid #d7d7d7;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 8px 10px 8px 10px;
    align-items: center;
    color: #6b6767;
    font-size: 11px;
    font-weight: 600;
}
.btn2{
    border: 1px solid #36C5F1;
    background-color: #36C5F1;
    border-radius: 3px;
    padding: 8px 10px 8px 10px;
    align-items: center;
    font-size: 11px;
    color: white;
    font-weight: 600;
    margin: 10px 10px 10px 10px;
}
.btn3{
    border: 1px solid none;
    border-radius: 3px;
    padding: 8px 10px 8px 10px;
    align-items: center;
    font-size: 11px;
    color: #6b6767;
    font-weight: 600;
    margin: 10px 10px 10px 10px;

}
.search-tag{
    background-color: #ffffff;
    padding: 4px;
    border-radius: 3px;
    font-size: 13px;
    color: #716b6b;
    margin: 3px;
}
.recommend{
    font-size: 12px;
    font-weight: 700;
    color: #8b8b8b;
}
.pclass{
  color: #36C5F1; 
  margin-left:10px
}
.list-wrap{
  border-bottom: #ebebeb 1px solid;
  padding: 10px;
}
.list-wrap > p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px 8px 15px;
}
.list-wrap span{
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.list-wrap ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
}
.list-font{
    display: block;
    font-weight: 500;
    color: #3b3a3a;
  }
  .list-font > l{
    color: #8b8b8b;
  }
.list-wrap > ul > li{
    width: 30%;
    margin-bottom: 8px;
    cursor: pointer;
  }
</style>
