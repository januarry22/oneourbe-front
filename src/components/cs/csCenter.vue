<template>
<div>
    <div class="cs-search">
    <select class="btn3">
    <option selected>검색 ▾</option>
    <option>최신순</option>
    </select>
      <div>
        <button class="btn1">댓글을 기다리는 질문</button>
        <button class="btn2">질문하기</button>
      </div>
    </div>
    <div class="cs-wrap">
      <div class="cs-container">
              <p>
                    <span class="search-tag"># 기타</span>
                    <span class="search-tag"># 가구와 주방</span>
                    <span class="search-tag"># 인테리어</span>
              </p>
              <p class="recommend">
                추천 키워드 더보기 >
              </p>
      </div>
    </div>
     <div class="cs-noti">
      <ul class="cs-notilist" v-for="(noti,id) in noticeList" :key="id">
          <li>
              <p>
                <b-icon icon="megaphone-fill" style="color: #36C5F1; margin-right:10px"></b-icon>
                    {{noti.title}}
               </p>
          </li>
          <!-- <li>
              <p>빠르고 정확한 인테리어 답변을 받는 방법은?</p>
          </li>
          <li>
              <p>다시 돌아온 8월 멘토 모집</p>
          </li> -->
      </ul>
    </div>

     <div class="cs-content">
      <ul class="cs-cont">
              <li>
                  <p class="con-title">후기 구히귀구히귀</p>
                  <p class="cont">닉넴</p>
              </li>
              <li>
                  <p class="cont">2022.07.06 | 댓글 4 | 조회 19</p>
              </li>
              <li>
                <p>
                    <span class="tag"># 기타</span>
                    <span class="tag"># 가구와 주방</span>
                    <span class="tag"># 인테리어</span>
                </p>
              </li>
      </ul>
        <img src="../../assets/img/icon-top-menu1.png" alt="쇼핑하기">
     </div>
</div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import { dragscroll } from 'vue-dragscroll'

export default {
  //eslint-disable-next-line
  name: 'csCenter',
  components: {
    BIcon,
  },
   created: function () {
            this.csNotiList()
  },
  methods: {
    csNotiList: function () {
            this.$axios.post('/api/v1/noti',
                {
                  "type" : "CS_NOTI"
                }
            ).then(response => {
                this.noticeList = response.data.data
               // console.log('### data: ' + JSON.stringify(this.companyInfo,null,2))
            }).catch(error => {
                console.log(error)
      })
    }
  },
  data: function () {
    return {
        noticeList:[]
     }
  },

}
</script>
<style scoped>
  /* @import "../../assets/style.css"; */

.cs-wrap{
    background-color: #f3f0f0;
    position: relative;
    height: 80px;
}
.cs-container{
   width: 100%;
    height: 100%;
    display: inline-block;
    display: flex; 
    padding: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}
.cs-notilist > li {
    border-bottom: 1px solid #e7e7e7;
    height: 60px;
    font-size: 15px;
}
.cs-notilist > li > p {
    display: inline-block;
    margin: 20px;
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
</style>
