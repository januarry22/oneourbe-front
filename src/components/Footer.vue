<template>
    <div class="footer">
        <div class="benefits">
            <ul>
                <li  v-for="(section,id) in footerNoti" :key="id">
                    <router-link to="/">
                    <!-- TODO: icon null 값이면 에러 -->
                        <img :src="require(`@/assets/img/${section.icon_img}`)" alt="">
                        <!-- <img :src="section.icon_img" alt=""> -->
                        <div>
                            <h4>{{section.title}}</h4>
                            <p>{{section.content}}</p>
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
                policyList:[],
                footerNoti:[]
            }
                
        },
        created: function () {
            this.getcompanyInfo()
            this.getPolicy()
            this.getfooterNoti()
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
            },
             getfooterNoti: function () {
                this.$axios.get('/api/v1/noti/footer').then(response => {
                    this.footerNoti = response.data.data
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
