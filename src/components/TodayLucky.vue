<template>
  <!-- 자식 -->
  <div>
    <!-- <h3>별자리: {{propsLuck.star}}</h3> -->
    <h5 id="app">운세: {{propsLuck.luck}}</h5>
    <!-- <p>{{propsLuck}}</p> -->
    <button @click="clickLuck(propsLuck.star)">{{propsLuck.star}}</button>
  </div>
</template>

<script>
export default {
  // props안에 존재하는 값만 내려온다.
  props: {
    // propsLuck은 Object가 넘어온다.
    propsLuck: Object
  },
  methods: {
    // 버튼을 클릭하면 event를 실행
    // a태그를 사용해도 된다.
    clickLuck: function(luck){
      const targetURL = `https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=${luck}운세`
      // console.log(targetURL)
      // javascript redirect
      window.location.href = targetURL
    }
  }

}
</script>

<style>

</style>