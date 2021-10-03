# vue-study
----------------
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
 
----------------
  
## Vue-Todo

vue로 만든 스케쥴 웹 애플리케이션

![vue-todo-Chrome-2021-10-03-20-58-09](https://user-images.githubusercontent.com/56467808/135753727-17905097-84bf-4588-a20b-e3ed490dc3ed.gif)

1. 스케줄 추가
2. 스케줄 삭제(한개씩 삭제, 전체 삭제)
3. 스케줄 체크(completed 여부)
4. refactoring(component container) App.vue=>(컨테이너)   Footer, Input, List, Header => UI 표현
5. Modal 구현, Transitions & Animation
6. ES6 문법 적용 
7. refactoring(mutations)
8. vue 헬퍼함수(mapGetters, mapState, mapMutations, mapActions) 

----------------

## vue-news

vue로 만든 뉴스 웹 애플리케이션

![vue-news-Chrome-2021-10-03-21-06-08](https://user-images.githubusercontent.com/56467808/135753737-7ca88d41-e951-45dd-9ed4-d249485b1b31.gif)

1. 라우터를 이용한 페이지 이동
2. axios를 이용한 API 호출

----------------

## vue-webgame
vue로 만든 웹 게임

1. 구구단
  - {{}} => 데이터 변수를 사용 가능
  - v-model="" => 입력되는 값을 데이터의 값에 넣어줌
  - form button에서 값을 제출 type="submit"
  - v-on => 지정한 메소드를 호출해줌
  - ref => 직접 태그에 접근해야 할때 이름을 부여해줌

![구구단-개인-Microsoft_-Edge-2021-10-03-21-07-03](https://user-images.githubusercontent.com/56467808/135753970-6161b506-3473-40a1-90b1-1fbd65859f60.gif)


2. 끝말잇기
  - 반복되는 부분은 component로 만든다.
  - template안에는 오직 한개의 div만 있어야 한다. 형제 div가 존재해서는 안됨.
  - props: Component를 사용하는 곳에서 변수를 넘겨 component에서 해당 값을 사용할때 사용(달라지는 내용을 props를 이용해 넘긴다.)
  - webpack : 스크립트를 통합시켜주는 장점이 있다.

![끝말잇기-개인-Microsoft_-Edge-2021-10-03-21-08-35](https://user-images.githubusercontent.com/56467808/135753977-74a4f552-a39b-4cb5-8051-17736a85e1fc.gif)


3. 숫자야구
  - 절대경로 이용시 노드에서 제공해주는 것을 활용한다 <br>
  const path = require('path');
  path: path.join(__dirname, '경로명') 이런식으로 절대경로를 잡아줄 수 있다
  - v-for=" data in datas"  => datas 배열 안에 있는 값들을 꺼내서 출력해준다


![숫자야구-개인-Microsoft_-Edge-2021-10-03-21-09-42](https://user-images.githubusercontent.com/56467808/135753983-929b268f-f33a-4590-a146-37225921f41d.gif)


4. 반응속도체크

![반응속도체크-개인-Microsoft_-Edge-2021-10-03-21-17-46](https://user-images.githubusercontent.com/56467808/135753986-08f8cb80-2b26-4a0b-bf1c-a7a4b42d4844.gif)


5. 가위바위보
  - life cycle : 1. created : 컴포넌트가 보여지긴 하지만 화면에 나타나기 전, 2. mounted : 화면에 나타난 후 , 3. updated : 업데이트 , 4. destroyed : 파괴
  
![가위바위보-개인-Microsoft_-Edge-2021-10-03-21-26-14](https://user-images.githubusercontent.com/56467808/135754008-160df0c5-d1e5-4291-ae05-7716537078fb.gif)



6. 로또
  - watch : 값의 변화를 확인해 실행함

![로또-개인-Microsoft_-Edge-2021-10-03-21-28-21](https://user-images.githubusercontent.com/56467808/135754020-9979226c-6573-4302-abe7-b503f0f89cb4.gif)


