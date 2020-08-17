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
        name: 'キマイラ',
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
        increment: function() {
            this.count += 1
        },

        doAdd: function() {
            // リスト内で1番大きいIDを取得
            var max = this.enemys.reduce(function(a, b) {
                    return a > b.id ? a : b.id
                }, 0)
                // 新しいモンスターをリストに追加
            this.enemys.push({
                id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
                name: this.name, // 現在のフォームの入力値
                hp: 500
            })
        }
    }
})