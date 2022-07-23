# Oneourbe Front Page


## Project Info
```
Vue.js 

published by tgynalop@gmail.com
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 알쓸신잡

  - json.stringify() 이용해서 console 출력 커스텀

    var con = response.data
    console.log('### response: ' + JSON.stringify(con,null,2))

    // 객체로 변환 후 pretty 출력
    
 
  - Vue : router-link 사용하기
    - 다른 router로 이동 
    
    router.push({
      name: 'SiteList',
      params: { site: 'webisfree.com' }
    })
    
    // 파라미터 전달 가능 


  - <img> 태그 src :
      
        <img :src="require(`@/assets/img/${section.icon_img}`)" alt="">
        - require(`@/assets/img/${item.img_url}`) 로 렌딩 할경우 front 서버 내의 이미지 경로 호출

        <img :src="section.icon_img" alt="">
        - src ="section.icon_img" 객체 에서 바로 렌딩 할 경우 서버에서 호출 