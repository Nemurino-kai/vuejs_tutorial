var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        message: {
            value: 'Hello Vue.js!'
        },
        num: 1,
        list: ['にんじん', 'サンダル', 'ヨット', 'ごましお']
    },
    methods: {
        increment: function(){
            this.count += 1
        }
    }
})