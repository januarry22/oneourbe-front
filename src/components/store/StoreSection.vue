<template>

      <div class="content">
        <section class="section1">
          <BnnSlider></BnnSlider>

          <ul class="top-menu">
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu1.png" alt="쇼핑하기">
              <p>쇼핑하기</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu2.png" alt="오늘의집배송">
                <p>오늘의집배송</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu3.png" alt="평수별집구경">
              <p>평수별집구경</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu4.png" alt="공간별사진">
              <p>공간별사진</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu5.png" alt="빠른시공상담">
              <p>빠른시공상담</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu6.png" alt="오늘의집이사">
              <p>오늘의집이사</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu7.png" alt="오늘의딜">
              <p>오늘의딜</p>
            </a></li>
            <li><a href="#">
              <img src="../../assets/img/icon-top-menu8.png" alt="설치/수리대행">
              <p>설치/수리대행</p>
            </a></li>
          </ul>
   
          <router-link to="/" class="hash-tag">
            <b-icon b-icon icon="hash"></b-icon>
            <div>
              <h4>관심 있는 해시태그를 팔로우해보세요.</h4>
              <p>다양한 주제의 콘텐츠를 모아볼 수 있어요.</p>
            </div>
            <b-icon icon="chevron-right"></b-icon>
          </router-link>
    
        </section>

        <section class="section2 list-wrap">
          <h2>제법 멋진 나만의 아지트 🎈</h2 >
          <ul>
            <li v-for="(item,id) in list1" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
              </div>
              <h4>{{ item.title }}</h4>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </section>

        <section class="section3 list-wrap">
          <h2>자취초보를 구제할 꿀팁 👷🏽‍♂️</h2 >
          <ul>
            <li v-for="(item,id) in list2" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
              </div>              <h4>{{ item.title }}</h4>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </section>

        <section class="section4">
          <h2>카테고리별 상품 찾기</h2 >
          <ul class="category-menu" v-dragscroll>
            <li v-for="(item,id) in category" :key="id"><router-link to="/">
              <div class="img"><img :src=item.icon_img :alt="`${item.name}`"/> </div>
              <p>{{ item.name }}</p>
            </router-link></li>
          </ul>
        </section>

        <section class="section5">
          <div class="title">
            <h2>오늘의딜</h2>
            <b-icon icon="chevron-right"></b-icon>
          </div>
          <div class="today-deal">
            <div class="img"><img src="../../assets/img/today-deal.jpg" alt="오늘의딜"></div>
            <div class="content">
              <div class="info">
                <b-badge>6일남음</b-badge>
                <p class="name">1+1 데이지가든 네츄럴 PP 라탄 바구니 4size</p>
                <p class="discount-rate">67<span>%</span></p>
              </div>
              <div class="more">특가 341개 보기 ></div>
            </div>
          </div>
        </section>

        <section class="section6 list-wrap">
          <h2>소비 대장의 내돈내산 잘.샀.템 💰</h2 >
          <ul>
            <li v-for="(item,id) in list3" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
              </div>              
              <h4>{{ item.title }}</h4>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </section>

        <section class="section7 list-wrap">
          <h2>소비 대장의 내돈내산 잘.샀.템 💰</h2 >
          <ul>
            <li v-for="(item,id) in list4" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
              </div>              
              <h4>{{ item.title }}</h4>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <button class="more-btn">더보기</button>
        </section>

        <section class="section8 list-wrap video-photo">
          <div class="title">
            <h2>인기동영상</h2>
            <button>
              <b-icon icon="camera-fill"></b-icon>
              <p>올리기</p>
            </button>
            <p>매일 1,2,3위에게 최대 <span>4000P</span> 지급! ></p>
          </div>
          <ul class="video-list" v-dragscroll>
            <li v-for="(item,id) in list5" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
                <div class="order">
                  <div class="num">
                    <b-icon icon="bookmark-fill"></b-icon>
                    <span>{{ id + 1 }}</span>
                  </div>
                  <div class="video-length">{{ item.videoLength }}</div>
                </div>
                <h4>{{ item.userId }}</h4>
              </div>              

            </li>
          </ul>
          <div class="more-btn-wrap"><button class="more-btn">인기 동엉상 더보기</button></div>
        </section>

        <section class="section9 list-wrap video-photo">
          <div class="title">
            <h2>인기 사진 TOP 10</h2>
            <button>
              <b-icon icon="camera-fill"></b-icon>
              <p>올리기</p>
            </button>
            <p>매일 1,2,3위에게 <span>1000P</span> 지급! ></p>
          </div>
          <ul class="video-list" v-dragscroll>
            <li v-for="(item,id) in list6" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
                <button class="item-bookmark">
                  <b-icon icon="bookmark"></b-icon>
                  <b-icon icon="bookmark-fill"></b-icon>
                </button>
                <div class="order">
                  <div class="num">
                    <b-icon icon="bookmark-fill"></b-icon>
                    <span>{{ id + 1 }}</span>
                  </div>
                </div>
                <h4>{{ item.userId }}</h4>
              </div>              

            </li>
          </ul>
          <div class="more-btn-wrap"><button class="more-btn">인기 사진 더보기</button></div>
        </section>

        <section class="section10">
          <h2>유저들의 인테리어 시공 리뷰</h2>
          <ul>
            <li v-for="(item,id) in list7" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
              </div>     
              <div class="content">
                <p v-html="item.reviewText"></p>  
                <div class="profile-img">
                  <div><img :src="require(`@/assets/img/${item.conpanyImg}`)" /></div>
                  <p>{{ item.conpanyName }}</p> 
                </div>
              </div>
            </li>
          </ul>
          <button class="more-btn">인테리어 시공업체 더 찾기</button>
        </section>

        <section class="section11">
          <router-link to="/" class="title">
            <h2>오늘의 기획전</h2>
            <b-icon icon="chevron-right"></b-icon>
          </router-link>
          <ul>
            <li v-for="(item,id) in list8" :key="id">
              <div class="img">
                <img :src="require(`@/assets/img/${item.img}`)" /> 
              </div>     
              <div class="content">
                <div>
                  <p class="subtitle">{{ item.subTitle }}</p>  
                  <p class="title">{{ item.title }}</p>  
                </div>
                <p class="product-count">{{ item.productCount }}개 상품</p>  
              </div>
            </li>
          </ul>
          <button class="more-btn">기획전 더보기</button>
        </section>

        
        <section class="section12">
          <router-link to="/" class="title">
            <h2>베스트</h2>
            <b-icon icon="chevron-right"></b-icon>
          </router-link>
            <BestTabItem></BestTabItem>
          <div class="more-btn-wrap"><button class="more-btn">베스트셀러 더보기</button></div>
        </section>
      </div>
</template>

<script>
import BnnSlider from '@/components/banner/MainBanner';
import { BIcon } from 'bootstrap-vue'
import { dragscroll } from 'vue-dragscroll'
import BestTabItem from "@/components/BestTabItem.vue";

export default {
  //eslint-disable-next-line
  name: 'Home',
  components: {
    BIcon,
    BnnSlider,
    BestTabItem,
  },
  directives: {
    'dragscroll': dragscroll
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
      list1:[
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
      list2:[
        {
          title: '1인 다역',
          text: '활용도가 다양한 멀티 주방 잇템 7',
          img: 'section2-1.jpg'
        },
        {
          title: '쉽게 따라하자!',
          text: '자취로망 실현하는 원룸 수납법',
          img: 'section2-2.jpg'
        },
        {
          title: '5평 화이트룸의',
          text: '작은 포인트가 되는 소품들',
          img: 'section2-3.jpg'
        },
        {
          title: '좁은 자취방',
          text: '죽은 공간 살리는 틈새 아이템',
          img: 'section2-4.jpg'
        },
      ],
      list3:[
        {
          title: '코스트코/노브랜드/마켓컬리',
          text: '이건 꼭! 추천리스트',
          img: 'section3-1.jpg'
        },
        {
          title: '이케아로🛒',
          text: '홈오피스 힙하게 완성했어요',
          img: 'section3-2.jpg'
        },
        {
          title: '만족그러운',
          text: '욕실 살림템 10 #내돈내산',
          img: 'section3-3.jpg'
        },
        {
          title: '우리집 주방 맞춤!',
          text: '후회없는 살림템🔟',
          img: 'section3-4.jpg'
        },
      ],
      list4:[
        {
          title: '수채화 작가의',
          text: '맑고 투명한 미니멀 방',
          img: 'section4-1.jpg'
        },
        {
          title: '1인 가구 맞춤!',
          text: '집콕을 완성하는 필수가전 best🖐',
          img: 'section4-2.jpg'
        },
        {
          title: '쨍한⚡컬러들을',
          text: '깔끔하게 소화한 9평 방 꿀팁',
          img: 'section4-3.jpg'
        },
        {
          title: '골칫거리 정리정돈',
          text: '쉽게하는 이케아 가성비템6🧺',
          img: 'section4-4.jpg'
        },
      ],
      list5:[
        {
          userId: 'BlauesHaus',
          videoLength: '00:34',
          img: 'section5-1.jpg'
        },
        {
          userId: 'ngray',
          videoLength: '00:54',
          img: 'section5-2.jpg'
        },
        {
          userId: 'xoxosooz',
          videoLength: '00:24',
          img: 'section5-3.jpg'
        },
        {
          userId: 'YelloHome',
          videoLength: '00:28',
          img: 'section5-4.jpg'
        },
        {
          userId: 'fromtak',
          videoLength: '00:14',
          img: 'section5-5.jpg'
        },
        {
          userId: 'deat',
          videoLength: '00:28',
          img: 'section5-6.jpg'
        },
        {
          userId: 'Koh_home',
          videoLength: '00:41',
          img: 'section5-7.jpg'
        },
        {
          userId: '하하핳30',
          videoLength: '00:52',
          img: 'section5-8.jpg'
        },
        {
          userId: 'elleenjiml',
          videoLength: '00:26',
          img: 'section5-9.jpg'
        },
      ],
      list6:[
        {
          userId: '루디의집',
          img: 'section6-1.jpg'
        },
        {
          userId: '캠핑65',
          img: 'section6-2.jpg'
        },
        {
          userId: '소이플',
          img: 'section6-3.jpg'
        },
        {
          userId: '아날로그 소년',
          img: 'section6-4.jpg'
        },
        {
          userId: 'Hye jeong',
          img: 'section6-5.jpg'
        },
        {
          userId: '소소_blog',
          img: 'section6-6.jpg'
        },
        {
          userId: '2yujin22',
          img: 'section6-7.jpg'
        },
        {
          userId: 'happyhehe.yo',
          img: 'section6-8.jpg'
        },
        {
          userId: 'sense.cloud',
          img: 'section6-9.jpg'
        },
      ],
      list7:[
        {
          img: 'section7-1.jpg',
          conpanyName: '지니어스 Genie Us',
          conpanyImg: 'company-img1.webp',
          reviewText: '단지 시공뿐아닌 집전체를 디자인해주시면서 소통이 잘되었고 감각적인 시공으로 이쁜집이 완성되었습니다<br>추후AS도 부족함이 없었기에<br>감사한마음에 정말 좋은업체 좋은실장님을 만난것이<br>맞벌이인 저에게 큰행운이었다 생각합니다'
        },
        {
          img: 'section7-2.jpg',
          conpanyName: '(주)제이디자인',
          conpanyImg: 'company-img2.webp',
          reviewText: "저희는 집을 매매하고 거의 30년 가까이 된 오래된 아파트에서 도배만 하고 살다가 아이가 초등학교입학하면서 변화를 주고싶어 전체리모델링을 하게되었어요~ 3군데 정도 견적을 받아본 후 마지막으로 한번더 견적 받아보자고 한곳이 제이디자인이었습니다. 우선 실내건축면허 보유업체여서 더욱 믿음이 갔구요~ 공사 담당해주신 김재훈실장님과 박이사님을 뵙고 '아! 여기다!!!' 하고 고민없이 선택한것 같아요~ 견적서 받고 공사 잔금치르기까지 공사대금변동이 없었구요~ 단톡방에 매일매일 현장 사진과 공사일정을 알려주시고 좋은 자재들을 선택할 수있게 같이 피드백해주시고, 가끔 주말에도 문의드리고 이것저것 사소한것 귀찮게 해드린게 많은 고객이었는데 김재훈실장님께서 언제나 늘 친절하게 설명해주셔서 부담없이 문의하고 부탁드리고 했던거 같아요~ 큰 하자없이 공사 후 입주한지 3주 다 되어가는데 새집에 이사온것 같은 기분이예요~ 크림색의 벽지와 우드화이트 조합의 주방 분위기로 홈카페 분위기가 물씬~ 제이디자인으로 선택하길 정말 잘했다고 남편과 얘기해요~ 지금처럼 고객과 소통잘되는 정직한 업체로 더욱더 승승장구하는 제이디자인 되길 함께 응원하겠습니다. 🙂👍"
        },
        {
          img: 'section7-3.jpg',
          conpanyName: '노을',
          conpanyImg: 'company-img3.webp',
          reviewText: '인테리어 시공은 특성상 신뢰와 편안한 의사소통, 미적인 감각, 시공 능력과 시공에 대한 책임감 등이 모두 갖추어져야하는 특수한 분야이다보니 처음 업체들과 미팅을 하면서 이러한 엄격한 기준을 적용하였고 노을 인테리어는 이런 기준들에 제일 만족스러운 업체였습니다. 무엇보다 다른 업체와의 큰 차별점이라면. 실장님께서 상담과 시공현장 지휘를 직접 맡아주시기 때문에, 상담시는 실제 현장에서의 경험을 바탕으로 원하는 시공의 장단점을 정확히 알려주시는 점, 시공이 시작된 이후는 상담시 논의했던 내용들을 기억해서 정확한 시공을 해주시는 점이 차별화된 포인트라고 볼수 있습니다. 또 한가지는 상담시 미적인 부분을 중시하는 디자이너 선생님과 실용적인 부분을 중시하는 실장님 의견이 다른 경우들이 종종 나오곤 했는데 이러한 부분들도 재미있는 경험이였던것 같네요. 아무튼 이제 시공을 무사히 잘 마치고 입주해서 살고 있는데 완전 대만족입니다. 앞으로 다시 인테리어하게 된다면 저희는 고민할것도 없이 노을을 선택할겁니다.'
        },

      ],
      list8:[
        {
          img: 'section8-1.jpg',
          subTitle: '5일한정 최대 72% 할인',            
          title: '매월 1일~5일을 노려라! O! SALE',               
          productCount: '1088',                

        },
        {
          img: 'section8-2.jpg',
          subTitle: '용돈박스, 카네이견, 리클라이너까지!',            
          title: '[가정의달 기획] O! 선물하기 ~85%',               
          productCount: '1024',                

        },
        {
          img: 'section8-3.jpg',
          subTitle: '인기 여름 침구류에서 커튼, 여름 러그까지!',            
          title: 'ㅖPre Summer 패브릭 세일',               
          productCount: '614',                

        },
        {
          img: 'section8-4.jpg',
          subTitle: '아이패트/맥/아이맥/에어팟/워치 인기모음',            
          title: '5월 Apple 브랜드 프로모션',               
          productCount: '54',                

        },
        {
          img: 'section8-5.jpg',
          subTitle: '원하는 날 받아보는 빠른배송가전',            
          title: 'LG전자 인기 상품 BIG SALE',               
          productCount: '462',                

        },
        {
          img: 'section8-6.jpg',
          subTitle: '책상 위에서 즐기는 올레드 TV',            
          title: 'LG OLED TV 42 신제품 런칭',               
          productCount: '11',                

        },
        {
          img: 'section8-7.jpg',
          subTitle: '신상 라인 구매시, 100% 방수커버 증정',            
          title: '지누스 신상 런칭 단독특가 ~58%',               
          productCount: '89',                

        },
        {
          img: 'section8-8.jpg',
          subTitle: '단 일주일간 진행되는 오늘의집 특별할인',            
          title: '삼성전자 5월 의류가전 특가세일',               
          productCount: '94',                

        },
        {
          img: 'section8-9.jpg',
          subTitle: 'NEW OPEN! 신규 입점기념',            
          title: '무인양품 MUJI WEEK 전품목~10%',               
          productCount: '73',                

        },
        {
          img: 'section8-10.jpg',
          subTitle: '프리미엄',            
          title: '브랜드의 발견:카르텔',               
          productCount: '10',                

        },
        {
          img: 'section8-11.jpg',
          subTitle: '론칭기녕 일주일간 단독 특가 ~5/8',            
          title: '딩동~ 입점했어요! 이번주 신규 브랜드',               
          productCount: '609',                

        },
      ],
    }
  },

}
</script>
<style scoped>
  @import "../../assets/style.css";
</style>
