<template>
    <div class="bottom-nav">
        <ul>
          <!-- <li class="active"> -->
          <li 
            v-for="(tab,id) in tabs" :key="id" 
            v-bind:class="{active:currentTab==id}"
            v-on:click="currentTab = id"
            >
            <!-- <router-link :to="tab.href"> -->
              <img :src="require(`@/assets/img/${tab.icon}`)" alt="">           
              <p>{{tab.name}}</p>
            <!-- </router-link> -->
          </li>
          <li class="more">
            <button>
                <div>
                  <b-icon icon="plus" class="icon"></b-icon>                
                </div>
                <b-badge class="new">N</b-badge>
            </button>
          </li>
        </ul>
    </div>
  
</template>

<script>

import { BIcon } from 'bootstrap-vue'

export default {
  name: 'BottomNav',
  data: function () {
      return {
        currentTab: 0,
        tabs: [
          {
            'name':'Home',
            'href' :'/',
            'icon' :'bottom-menu1.png',
            selected : true
          },
          {
            'name':'스토어',
            'href' :'/',
            'icon' :'bottom-menu2.png',
            selected : false
          },
           {
            'name':'인테리어시공',
            'href' :'/',
            'icon' :'bottom-menu3.png',
            selected : false
          },
          {
            'name':'마이페이지',
            'href' :'/myPage',
            'icon' :'bottom-menu4.png',
            selected : false
          }
        ],
        toggleFn: function(tab){
            tab.selected = !tab.selected
            location.href=tab.href
        }
      }
            
  },
  components: {
    BIcon,
  }

}
</script>


<style scoped>
  .bottom-nav{
    position: fixed;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    background-color: #F8F9FB;
    height: 54px; width: 100%;
    border-top: 1px solid #C4C8CB;
    z-index: 999;
  }
  .bottom-nav ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;

  }
  .bottom-nav li{
    width: 19%;
    text-align: center;
    height: 100%;
  }
  .bottom-nav a{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; height: 54px;
  }
  .bottom-nav img{
    max-width: 34px;
  }
  .bottom-nav p{
    font-size: 10px;
    font-weight: bold;
  }
  .bottom-nav .active p{color: #36C5F1;}
  .more button{
    height: 54px;
    position: relative;
  }
  .more div{
    width: 42px; height: 42px;
    border-radius: 50%;
    background-color: #36C5F1;
    margin: 0 auto;
  }
  .more .icon{
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
        position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .new{
    position: absolute;
    left: calc(50% + 5px); top: 0;
    background-color: #FE7676;
    font-weight: bold;
    border-radius: 50%;
    height: 20px; width: 20px;
    padding: 0;
    line-height: 20px;
  }
</style>
