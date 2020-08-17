var app = new Vue({
    el: '#app',
    methods:{
        handleClick: function(event){
            alert(event.target) // [object HTMLButtonElement]
        }
    },
    data: {
        message :'Hello Vue.js!',
        list:['にんじん','サンダル','ヨット','ごましお']
    }
  })