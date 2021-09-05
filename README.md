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
  - 3.x : 필요 o <br><br><br>

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



