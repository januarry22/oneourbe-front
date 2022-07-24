<template>
    <div class="cs-wrap">
      <div class="cs-container">
         <p> 자주하는 질문 </p>
      </div>
    </div>
    <div>
      
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
            this.getCategory()
        },
  methods: {
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

     }
  },

}
</script>
<style scoped>
  /* @import "../../assets/style.css"; */

.cs-wrap{
    background-color: #eae9e9;
    position: relative;
    height: 118px;
    border-radius: 15px;
    margin: 20px;
}
.cs-container{
   width: 100%;
    height: 100%;
}
</style>
