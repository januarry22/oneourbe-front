<template>
  <div>
    <!-- 탭 -->
    <div class="tabs-wrap">
      <div class="tabs" v-dragscroll>
        <button
        v-for="(tab,index) in categoryMainTab" 
        :key="index"
        v-bind="{active: currentTab === index}"
        @click="currentTab = index"
        :class="{active: currentTab === index}"
        >
          {{tab.name}}
        </button>
      </div>
    </div>
    <!-- 리스트 -->
    <div class="cont">
      <div 
      v-for="(item,index) in contents" 
      :key="index" v-show="currentTab == index"
      class="tab-content"
      :class="{active: currentTab === index}"
      >
          <div v-for="(bestList,index) in item.arr" :key="bestList.index">
            <div class="img">
              <img :src="require(`@/assets/img/${bestList.img}`)" />
              <span>{{ index +1 }}</span> 
            </div>
            <p class="name">{{ bestList.name }}</p>
            <div class="price-wrap">
                <p class="discount">{{ bestList.discount }}%</p>
                <p class="price">{{ bestList.price }}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<!-- swipe tab..실패...ㅋㅋㅋㅋㅋㅋㅋ -->
<!-- https://codesandbox.io/s/taeb2-c4q5j?file=/src/App.vue:2552-2563 -->
<script>
import { dragscroll } from 'vue-dragscroll'
export default {
  name: 'BestTabItem1',
  components: {  },
  data: function () {
    return {
        directives: {
          'dragscroll': dragscroll
        },
        currentTab: 0,
        categoryMainTab: [],
        contents :[
          {
          name: '전체',
            arr: [
              {
                name: '[오늘의딜] LG트롬 워시타워 3color 세탁24kg건조17kg 화이트/실버/블랙',
                discount: '30',
                price: '2,298,000',
                img: 'best1-1.gif'
              },
              {
                name: 'Q4 유로탑 롤팩 매트리스 2size',
                discount: '59',
                price: '284,900',
                img: 'best1-2.jpg'
              },
              {
                name: '[맞춤]비침없는 화이트 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)',
                discount: '55',
                price: '19,900',
                img: 'best1-3.jpg'
              },
            ]
          },
          {
          name: '가구',
            arr: [
              {
                name: 'Q4 유로탑 롤팩 매트리스 2size',
                discount: '59',
                price: '284,900',
                img: 'best1-2.jpg'
              },
              {
                name: '[10%쿠폰]당일출고 호텔식 프리미엄 독립 포켓스프링 필로우탑 매트리스',
                discount: '59',
                price: '118,700',
                img: 'best2-2.webp'
              },
              {
                name: '캐더린 LED 통서랍 수납침대 SS/Q (매트리스선택)(희망일배송)',
                discount: '33',
                price: '164,900',
                img: 'best2-3.webp'
              },
            ]
          },
          {
          name: '패브릭',
            arr: [
              {
                name: '[맞춤]비침없는 화이트 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)',
                discount: '55',
                price: '19,900',
                img: 'best1-3.jpg'
              },
              {
                name: '[10%쿠폰/단독] 부드러운 카스테라 옥수수솜 사계절이불 차렵이불세트',
                discount: '57',
                price: '37,900',
                img: 'best3-2.webp'
              },
              {
                name: '40수 코마사 호텔수건 200g 10장',
                discount: '62',
                price: '29,900',
                img: 'best3-3.jpg'
              },
            ]
          },
          {
          name: '조명',
            arr: [
              {
                name: '(NEW 컬러 출시!/전구증정) 머쉬룸 장스탠드 순수 국내 제작 고퀄리티',
                discount: '31',
                price: '129,000',
                img: 'best4-1.webp'
              },
              {
                name: '[O!프리미엄위크][해외] 앤트레디션 플라워팟 포터블 테이블램프 VP9',
                discount: '20',
                price: '198,000',
                img: 'best4-2.webp'
              },
              {
                name: '[7%쿠폰]RUSTA 장스탠드 11colors',
                discount: '18',
                price: '17,100',
                img: 'best4-3.webp'
              },
            ]
          },
          {
          name: '가전',
            arr: [
              {
                name: 'LG 디오스 베이직 오브제컬렉션 냉장고 M872MWW031',
                discount: '43',
                price: '1,639,000',
                img: 'best5-1.webp'
              },
              {
                name: '[오늘의딜] LG트롬 워시타워 3color 세탁24kg건조17kg 화이트/실버/블랙',
                discount: '30',
                price: '2,298,000',
                img: 'best1-1.gif'
              },
              {
                name: '[혜택가 152만] 삼성 멀티형 Q9000 에어컨 AF17A6474NZRS 전국기본설',
                discount: '30',
                price: '1,879,600',
                img: 'best5-3.webp'
              },
            ]
          },
          {
          name: '주방용품',
            arr: [
              {
                name: '[단독]독일 주방명품 IH 쿡웨어 7P 세트 (멀티핸들 포함)',
                discount: '76',
                price: '68,900',
                img: 'best6-1.webp'
              },
              {
                name: '[리퍼]*혼자산다! 편백향이 가득! 내린 편백찜기',
                discount: '44',
                price: '89,000',
                img: 'best6-2.webp'
              },
              {
                name: '(핑크재입고)완판 세라믹코팅 주방칼 6종세트 + 도마증정',
                discount: '41',
                price: '29,900',
                img: 'best6-3.webp'
              },
            ]
          },
      
          {
          name: '데코·식물',
            arr: [
              {
                name: 'NEW향출시! (3+1) 천연디퓨저 200ml 27가지 향기 드라이플라워 증정',
                discount: '50',
                price: '9,900',
                img: 'best7-1.webp'
              },
              {
                name: 'NEW 돈만 넣으면 끝! 간편한 할매 돈부채+전통리본+선물상자(+카네이션',
                discount: '22',
                price: '13,900',
                img: 'best7-2.gif'
              },
              {
                name: '퓨어 미니 LED 벽시계 3colors',
                discount: '40',
                price: '14,800',
                img: 'best7-3.webp'
              },
            ]
          },
          {
          name: '수납·정리',
            arr: [
              {
                name: '[자취SALE] 5단 360도 회전 이동식 네모 트롤리 6colors',
                discount: '59',
                price: '95,900',
                img: 'best8-1.webp'
              },
              {
                name: '경량랙 무볼트 조립식 철제 앵글선반 5단',
                discount: '15',
                price: '52,900',
                img: 'best8-2.webp'
              },
              {
                name: '골드 2000 드레스룸 2colors(블랙 색상 신규 출시,옷커버증정)',
                discount: '27',
                price: '199,000',
                img: 'best8-3.webp'
              },
            ]
          },
          {
          name: '생활용품',
            arr: [
              {
                name: '40수 코마사 호텔수건 200g 10장',
                discount: '62',
                price: '29,900',
                img: 'best3-3.jpg'
              },
              {
                name: '[15%쿠폰][오늘의딜] 냄새잡는 휴지통 신상 히포크롬 일반히포 21L 27L',
                discount: '16',
                price: '49,500',
                img: 'best9-2.webp'
              },
              {
                name: 'NEW 모던데일 재활용 분리수거함 2종 3P',
                discount: '50',
                price: '19,900',
                img: 'best9-3.webp'
              },
            ]
          },
          {
          name: '생필품',
            arr: [
              {
                name: '초고농축 섬유유연제 1Lx6개',
                discount: '16',
                price: '24,900',
                img: 'best10-1.webp'
              },
              {
                name: '[20%쿠폰][오늘의딜] 독일 친환경 식기세척기세제 30개입 4개SET + 사',
                discount: '37',
                price: '47,500',
                img: 'best10-2.webp'
              },
              {
                name: '[자취SALE] 라벤더 3겹 데코 천연펄프 화장지 25m 30롤 1팩',
                discount: '42',
                price: '10,900',
                img: 'best10-3.webp'
              },
            ]
          },
      
          {
          name: '공구·DIY',
            arr: [
              {
                name: '조립식 데크타일 - 스토니(Stony) 36P / 봄 한정색상 추가',
                discount: '46',
                price: '52,500',
                img: 'best11-1.webp'
              },
              {
                name: '[O!프리미엄위크]ORIGINAL 2C Multi Plug 4colors',
                discount: '3',
                price: '53,350',
                img: 'best11-2.webp'
              },
              {
                name: '[오늘의딜] 만능 풀바른 벽지 간편 셀프도배 합지벽지 (사은품 증정)',
                discount: '76',
                price: '400',
                img: 'best11-3.webp'
              },
            ]
          },
          {
          name: '인테리어시공',
            arr: [
              {
                name: '[오늘의딜] 안심 에어컨 분해청소 (벽걸이/스탠드/천정형)',
                discount: '32',
                price: '57,000',
                img: 'best12-1.webp'
              },
              {
                name: '에어컨 청소 (완전분해/곰팡이제거/살균)',
                discount: '5',
                price: '85,500',
                img: 'best12-2.webp'
              },
              {
                name: '에어컨 청소 클리닝 서비스 (구매 후 예약필수 상품)',
                discount: '37',
                price: '40,900',
                img: 'best12-3.webp'
              },
            ]
          },
          {
          name: '반려동물',
            arr: [
              {
                name: '원목 고양이 캣폴 캣타워 11종 4colors',
                discount: '43',
                price: '77,000',
                img: 'best13-1.webp'
              },
              {
                name: '가르르 원목 캣타워 캣폴 대형캣타워',
                discount: '46',
                price: '267,800',
                img: 'best13-2.webp'
              },
              {
                name: '로하우스 미끄럼방지 애견매트 논슬립 펫 강아지 고양이 롤매트',
                discount: '16',
                price: '9,900',
                img: 'best13-3.webp'
              },
            ]
          },
          {
          name: '캠핑용품',
            arr: [
              {
                name: '[오늘의딜/4천원쿠폰] 2022 지라프 구이바다 세라믹 아이보리 에디션 M',
                discount: '19',
                price: '128,000',
                img: 'best14-1.webp'
              },
              {
                name: '(예약판매)문캠핑 롤테이블 2colors(중/대)_유리매트+풋커버4',
                discount: '40',
                price: '56,900',
                img: 'best14-2.webp'
              },
              {
                name: '(예약판매) 문캠핑 캠핑의자 2개세트(1+1) 캠핑 커밋의자/체어(2colors)',
                discount: '66',
                price: '55,900',
                img: 'best14-3.jpg'
              },
            ]
          },
          {
          name: '실내운동',
            arr: [
              {
                name: '집에서하는 홈 필라테스 기구 가정용 스파인코렉터',
                discount: '28',
                price: '32,900',
                img: 'best15-1.webp'
              },
              {
                name: '정직한형제들 가정용 런닝머신 접이식 워킹패드',
                discount: '30',
                price: '679,000',
                img: 'best15-2.webp'
              },
              {
                name: '스마트인바디체지방12데이터어플연동체중계/펫겸용',
                discount: '8',
                price: '22,900',
                img: 'best15-3.jpg'
              },
            ]
          },
          {
          name: '유아·아동',
            arr: [
              {
                name: '[7%쿠폰] NEW 샘키즈 수납장 1305 뉴트럴베이지',
                discount: '22',
                price: '166,900',
                img: 'best16-1.webp'
              },
              {
                name: '[할인쿠폰] 로넌 1200 전면책상 플랩도어형(2색)',
                discount: '35',
                price: '214,000',
                img: 'best16-2.webp'
              },
              {
                name: '프리미엄 원터치 기저귀교환대 기저귀갈이대',
                discount: '22',
                price: '69,900',
                img: 'best16-3.webp'
              },
            ]
          },
          {
          name: '렌탈',
            arr: [
              {
                name: '[렌탈] 그랑데 AI 세탁기 21kg + AI 건조기 17kg (이녹스실버)',
                discount: '',
                price: '0',
                img: 'best18-1.webp'
              },
              {
                name: '[렌탈/할부] 웰릭스 클린AI 음식물처리기 화이트 4L CAN-400W',
                discount: '',
                price: '0',
                img: 'best18-2.webp'
              },
              {
                name: '[렌탈] 삼성 무풍 2in1 (19+6평형) 에어컨 AF19B7934WZWRS',
                discount: '',
                price: '0',
                img: 'best18-3.webp'
              },
            ]
          },
          {
          name: '식품',
            arr: [
              {
                name: '[지구의날 기념 콜라보] 네스카페 X 브리타 기획팩',
                discount: '49',
                price: '38,165',
                img: 'best19-1.webp'
              },
              {
                name: '이화횟집 낙지볶음 (2인분)',
                discount: '',
                price: '23,900',
                img: 'best19-2.webp'
              },
              {
                name: '햇반210g*3x12 (36개입)',
                discount: '20',
                price: '47,808',
                img: 'best19-3.webp'
              },
            ]
          },
      
        ]
    }
  },
  created: function () {
            this.getMainCategory()
      },
        methods: {
            getMainCategory: function () {
              this.$axios.get('/api/v1/category/main').then(response => {
                  this.categoryMainTab = response.data.data
                //  console.log('### data: ' + JSON.stringify(this.categoryMainTab,null,2))
              }).catch(error => {
                  console.log(error)
              })
            },
        },
}
</script>

<style scoped>
.tabs-wrap{
  padding: 0 16px;
}
.tabs{
  display: flex;
    border-bottom: 1px solid #DEDEDE !important;
    border-top: 1px solid #DEDEDE;
    color: #757575;
    height: 46px;
    overflow: hidden;
    padding: 0 15px;
    flex-wrap: nowrap;
    position: relative;
    border-bottom: 0;
}
.tabs button{
  width: max-content;
  font-size: 14px;
  margin-right: 20px;
  word-break: keep-all;
  position: relative;
  border: 0; padding: 0 3px;
  height: 100%;
  white-space: nowrap;
}
.tabs button:last-child{margin-right: 0;}
.tabs button.active{
  color: #36C4F1;
  font-weight: bold;
}
.tabs button.active::after{
  display: block;
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background-color: #36C4F1;

}
.cont{
  margin: 20px 16px;
  overflow: hidden;
}
.tab-content{
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.tab-content > div{
  width: calc(33.333% - 10px);
  margin-right: 15px;
}
.tab-content div:last-child{margin-right: 0;}
.tab-content .img{
  border-radius: 5px;
  overflow: hidden;
  line-height: 0;
  position: relative;
  width: 100%; height: 167px;
}
.tab-content .img img{
  width: 100%; height: 100%;
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%,-50%);
  }
.tab-content span{
  position: absolute;
  left: 0; top: 0;
  background-color: #36C4F1;
  color: #ffffff;
  display: block;
  padding: 5px 8px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
  font-weight: bold;
}
.tab-content .name{
  margin: 20px 0 8px;
  color: #898989;
}
.price-wrap{
  display: flex;
  align-items: center;
}
.discount{
  font-weight: bold;
  color: #36C4F1;
}
.price{
  font-weight: bold;
  margin-right: 5px;
}

</style>