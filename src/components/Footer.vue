<template>
    <div class="footer">
        <div class="benefits">
            <ul>
                <li>
                    <router-link to="/">
                        <img src="../assets/img/icon-footer1.png" alt="친구 초대">
                        <div>
                            <h4>친구 초대</h4>
                            <p>5000포인트<br>선물까지</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="../assets/img/icon-footer2.png" alt="오늘의집 스토리">
                        <div>
                            <h4>오늘의집 스토리</h4>
                            <p>오늘의집이<br>궁금해요.</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="../assets/img/icon-footer3.png" alt="고객센터">
                        <div>
                            <h4>고객센터</h4>
                            <p>평일 09:00~ 18:00<br>(주말 &amp; 공휴일 제외)</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div>
                            <h4>전문가 회원 가입</h4>
                            <p>인테리어 전문가님들!<br>오늘의집과 함께하세요.</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div>
                            <h4>사업자 구매 회원 전환</h4>
                            <p>사업자 구매 회원에게<br>혜택을 드립니다.</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="company-info">
            <h3>{{companyInfo.name}}</h3>
            <p>{{companyInfo.ceo}}</p>
            <p>{{companyInfo.addr}}</p>
            <p>{{companyInfo.email}} <span></span> {{companyInfo.tel}}</p>
        </div>
        <ul class="footer-nav">
            <!-- TODO: 약관 내용 팝업 출력 or 페이지이동 -->
            <li v-for="(item,id) in policyList" :key="id">
                <router-link to="">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
//eslint-disable-next-line
    name: 'Footer',
    data: function () {
             return {
                companyInfo: [],
                policyList:[]
            }
                
        },
        created: function () {
            this.getcompanyInfo()
            this.getPolicy()
        },
        methods: {
            getcompanyInfo: function () {
            this.$axios.get('/api/v1/company').then(response => {
                this.companyInfo = response.data.data
               // console.log('### data: ' + JSON.stringify(this.companyInfo,null,2))
            }).catch(error => {
                console.log(error)
            })
            },
             getPolicy: function () {
            this.$axios.get('/api/v1/policy').then(response => {
                this.policyList = response.data.data
               // console.log('### data: ' + JSON.stringify(this.policyList,null,2))
            }).catch(error => {
                console.log(error)
            })
            }
        },

}
</script>


<style scoped>
.footer{
    background-color: #F7F8FA;
}
.benefits{background-color: #FAFAFA;}
.benefits ul{
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
}
.benefits li{
    width: 33.333%;
    border-right: 1px solid #E7E7E7;
}
.benefits li:nth-child(n+4):nth-child(-n+5){
    width: 50%;
    border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
}
.benefits li:nth-child(3),
.benefits li:nth-child(5){
    border-right: 0;
}
.benefits li a{
    display: block;
    text-align: center;
    padding: 26px 0;
}
.benefits h4{
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 13px;
}
.benefits p{
    font-size: 12px;
    line-height: 1.5;
    color: #757575;
}
.company-info{
    max-width: 500px;
    margin: 0 auto;
    padding: 26px 16px;
}
.company-info h3{
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 13px;
}
.company-info p{
    margin-bottom: 5px;
    color: #656E73;
    font-size: 12px;
}
.company-info p:last-child{display: flex; align-items: center;}
.company-info p span{
    display: block;
    height: 8px; width: 1px;
    background-color: #DBDCE0;
    margin: 0 6px;
}
.footer-nav{
    padding: 0 16px 42px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.footer-nav li a{
    font-size: 13px;
    color: #656E73;
    font-weight: bold;
}
.footer-nav li a:first-child{margin-right: 10px;}
</style>
