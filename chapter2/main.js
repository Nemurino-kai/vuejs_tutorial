var app = new Vue({
    el: '#app',
    data: {
        radius: 50,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        count: 0,
        message: {
            value: 'Hello Vue.js!'
        },
        num: 1,
        list: ['にんじん', 'サンダル', 'ヨット', 'ごましお'],
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        }
    },
    methods: {
        increment: function(){
            this.count += 1
        }
    }
})