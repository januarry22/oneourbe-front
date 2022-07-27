<template>
<div>
   <div class="list-wrap">
      <div class="profile">
          <div class="profile-img">
            <img src="../../assets/img/icon-top-menu2.png" alt="오늘의집배송">
          </div>
          <div class="profile-info">
            <p class="nickname">닉네임</p>
            <p>팔로워 <strong>0</strong>  |  팔로잉 <strong>0</strong></p>
            <button>친구 초대하고 <strong>5,000P</strong> 받기</button>
          </div>

      </div>
      <div class="cs-container">
        <div>
            <p class="light"><b-icon icon="bell-fill"></b-icon></p>
            <p class="auto-set">알림</p>
        </div>   
        <div>
            <p class="light"><b-icon icon="bookmark-fill"></b-icon></p>
            <p class="auto-set"> 스크랩북 </p>
        </div>
        <div>
              <p class="light"><b-icon icon="heart-fill"></b-icon></p>
              <p class="auto-set"> 좋아요 </p>
        </div>
      </div>
    </div>

    <div class="list-wrap">
      <p><span class="list-font">나의 쇼핑</span><button> > </button></p>
      <div class="cs-container" style="background-color: #f3f3f3dd;">
        <div>
            <p class="light">0</p>
            <p class="auto">진행중 주문 </p>
        </div>   
        <div>
            <p class="light">0</p>
            <p class="auto"> 내 쿠폰</p>
        </div>
        <div>
              <p class="light">0</p>
              <p class="auto"> 포인트 </p>
        </div>
      </div>
    </div>
    <div class="list-wrap">
          <BnnSlider></BnnSlider>
    </div>
    <div class="list-wrap">
      <p><span class="list-font">스크랩북 </span><button> > </button></p>
          <ul>
            <li v-for="(item,id) in list1" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
              </div>
            </li>
          </ul>
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
                'name': '집들이',
                'cnt' :0
              },
              {
                'name': '노하우',
                'cnt' :0
              },
                 {
                'name': '질문과 답변',
                'cnt' :0
              },
                 {
                'name': '리뷰쓰기',
                'cnt' :0
              },
                 {
                'name': '리뷰',
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
.profile{
    margin: 4%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.profile-info .nickname{
    font-size: 17px;
    font-weight: 600; 
    color: #000000;
}
.profile-img{
    border-radius: 100px;
    height: 100px;
    width: 100px;
}
.profile-info > p{    
    margin: 10px;
    font-size: 12px;
    color: #adb5bd;
}
.profile-info > p > strong{    
    font-size: 12px;
}
.profile-info{    
    width: 63%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.profile-info > button{
    font-size: 10px;
    background-color: #ddf7ff;
    padding: 7px 15px 7px 15px;
    border-radius: 4px;
}
.profile-info > button > strong{
    font-size: 10px;
    font-weight: bold;
    color: #36C5F1;
}
.profile-img > img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
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
    font-size: 14px;
    color: #727578;
    margin-top: 6px;
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
.list-wrap > ul > li{
    width: 30%;
    margin-bottom: 8px;
    cursor: pointer;
  }
</style>
