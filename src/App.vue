<template>
  <!-- 부모 -->
  <div id="app">
    <!-- <h1>soulpeace</h1> -->
    <!-- 양방향 바인딩(v-model)은 input에서만 사용 가능 -->
    <!-- <input type="text" v-model="input"> -->
    <!-- <p>{{input}}</p> -->
    <!-- <p>{{filteredInput}}</p> -->
    <!-- <h3>{{time}}</h3> -->
    <h1>오늘의 운세</h1>
    <!-- v-bind -->
    <!-- key는 필수조건 -->
    <!-- key는 숫자 혹은 string을 넣는 것이 원칙 -->
    <!-- django에서 id가 넘어오면 key값에 넣어준다. -->
    <!-- propsLuck="lucky"의 lucky는 반복문에서 나온 lucky -->
    <!-- 부모에서 propsLuck이라는 이름으로 넘겨준다고 선언 -->
    <!-- propsLuck이라는 이름으로 자식 컴포넌트에서 사용 가능하다. -->
    <TodayLucky v-for="lucky in luckys" :key="lucky.star" v-bind:propsLuck="lucky"/>
  </div>
</template>

<script>
import TodayLucky from './components/TodayLucky.vue'

export default {
  name: 'app',
  components: {
    TodayLucky
  },
  // component는 자기 자신만 결과를 가지고 있기를 원하기 때문에 return하는 함수를 data로 받는다.
  data: function(){
    return {
      // input: '',
      // 나중에는 django 서버에서 불러오게 된다.
      luckys: [
        {
          star: '물병자리',
          luck: '오늘 괜한 조급함으로 일을 그르치게 될 수도 있으니 급할수록 돌아..'
        },
        {
          star: '물고기자리',
          luck: '전반적으로 그리 좋지 않은 상황에 위치해 있군요. 특히 금전운이 ..'
        },
        {
          star: '양자리',
          luck: '맞서 싸우기보다 한 발 물러서서 베풀어야 할 하루입니다. 그것이 ..'
        },
        {
          star: '황소자리',
          luck: '오늘 할 일을 내일로 미루고 또 내일 할 일을 모레로 미루지 마세요..'
        }
      ]
    }
  },
  // computed는 계산하고 변수에 저장하는 역할을 한다.
  // computed에 선언된 값은 data와 중복될 수 없다.
  // 변수로 접근 가능한 time을 만든다.
  // 종속된 데이터가 바뀌면 결과를 실행한다.
  // computed는 종속성을 가진다.
  // 초기 데이터가 바뀌면 함수가 실행된다.
  computed: {
    // function 함수를 돌려 결과를 time에 저장한다.
    // 데이터가 실시간으로 바뀌지 않는다.
    // 종속되지 않기 때문에 바뀌지 않는다.
    time: function(){
      // 다만 데이터가 바뀌게 되면 시간이 바뀌는 것을 볼 수 있다.
      this.input.replace(/하이/g, 'hi')
      return new Date()
    },
    filteredInput: function(){
      // replace는 원본을 바꾸지 않으므로 return을 바로 해줘야 한다.
      // this.input이 바뀌어야 filteredInput도 바뀐다.
      // 정규 표현식 '/단어1|단어2/g'
      return this.input.replace(/바보|똥개|꺼져/g, '**')
    }
  }
}
</script>

<style scoped>
/* scoped를 사용하면 component를 구분해주고 data-v-7ba5bd90 같은 데이터가 붙는다. */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
