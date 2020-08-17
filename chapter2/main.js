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
        enemys: [],
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        }
    },
    created: function() {
        axios.get('http://localhost:3000/enemys').then(function(response) {
            // 取得完了したらenemysリストに代入
            this.enemys = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
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
        },

        // 攻撃ボタンをクリックしたときのハンドラ
        doAttack: function(index) {
            this.enemys[index].hp -= 10 // HPを減らす
        }

    }
})