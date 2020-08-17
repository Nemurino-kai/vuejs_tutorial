var app = new Vue({
    el: '#app',
    data: {
        type: "A",
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
        enemys: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        }
    },
    methods: {
        increment: function () {
            this.count += 1
        }
    }
})