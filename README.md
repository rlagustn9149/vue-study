# vue-study

### CLI 2.x vs CLI 3.x
- 명령어
  - 2.x: vue init '프로젝트 템플릿 이름' '파일 위치'
  - 3.x: vue create '프로젝트 이름'

- 웹팩 설정 파일
  - 2.x : 노출 o
  - 3.x : 노출 x

- 프로젝트 구성
  - 2.x : 깃헙의 템플릿 다운로드
  - 3.x : 플러그인 기반으로 기능 추가

- ES6 이해도
  - 2.x : 필요 x
  - 3.x : 필요 o 

- state는 왜 mutations으로 변경할까?
  - 특정 컴포넌트에서 변경을 할때 추적이 용이해짐
  - 뷰의 반응성을 받기 수월하게 하기 위해

- actions
  - 비동기 처리
  - Promise, ES6 ansync와 같은 비동기 처리가 필요할때 사용 
  
## Vue-Todo

vue로 만든 스케쥴 웹 애플리케이션
1. 스케줄 추가
2. 스케줄 삭제(한개씩 삭제, 전체 삭제)
3. 스케줄 체크(completed 여부)
4. refactoring(component container) App.vue=>(컨테이너)   Footer, Input, List, Header => UI 표현
5. Modal 구현, Transitions & Animation
6. ES6 문법 적용 
7. refactoring(mutations)
8. vue 헬퍼함수(mapGetters, mapState, mapMutations, mapActions) 


## vue-news

vue로 만든 뉴스 웹 애플리케이션

1. 라우터를 이용한 페이지 이동
2. axios를 이용한 API 호출


## vue-webgame
vue로 만든 웹 게임

1. 구구단
  - {{}} => 데이터 변수를 사용 가능
  - v-model="" => 입력되는 값을 데이터의 값에 넣어줌
  - form button에서 값을 제출 type="submit"
  - v-on => 지정한 메소드를 호출해줌
  - ref => 직접 태그에 접근해야 할때 이름을 부여해줌

2. 끝말잇기
  - 반복되는 부분은 component로 만든다.
  - template안에는 오직 한개의 div만 있어야 한다. 형제 div가 존재해서는 안됨.
  - props: Component를 사용하는 곳에서 변수를 넘겨 component에서 해당 값을 사용할때 사용(달라지는 내용을 props를 이용해 넘긴다.)
  - webpack : 스크립트를 통합시켜주는 장점이 있다.

3. 숫자야구
  - 절대경로 이용시 노드에서 제공해주는 것을 활용한다 <br>
  const path = require('path');
  path: path.join(__dirname, '경로명') 이런식으로 절대경로를 잡아줄 수 있다
  - v-for=" data in datas"  => datas 배열 안에 있는 값들을 꺼내서 출력해준다



`


