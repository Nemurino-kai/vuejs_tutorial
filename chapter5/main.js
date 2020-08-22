var bus = new Vue({
    data: {
        count: 0
    }
})

Vue.component('my-component', {
    template: '<div class="my-component">\
    <p>名前.{{ name }} HP.{{ hp }}</p>\
    <p>名前 <input v-model="localName"></p>\
    <p>HP <input size="5" v-model.number="localHp"></p>\
    </div>',
    props: {
        name: String,
        hp: Number
    },
    computed: {
        // 算出プロパティのセッター＆ゲッターを使ってv-modelを使用
        localName: {
            get: function() {
                return this.name
            },
            set: function(val) {
                this.$emit('update:name', val)
            }
        },
        localHp: {
            get: function() {
                return this.hp
            },
            set: function(val) {
                this.$emit('update:hp', val)
            }
        }
    }
})

Vue.component('my-calendar', {
    model: {
        // 現在の値をvalueではなくcurrentに割り当てる
        prop: 'current',
        // イベントをchangeに割り当てる
        event: 'change'
    },
    // propsでcurrentを受け取る
    props: {
        current: String
    },
    created: function() {
        this.$emit('change', '2018-01-01')
    },
    template: "<div>{{ current }}</div>"
})

Vue.component('slot-comp', {
    template: '<section class="comp-child">\
    <slot name="header">\
      <header>\
        デフォルトタイトル\
      </header>\
    </slot>\
    <div class="content">\
      <slot>デフォルトコンテンツ</slot>\
    </div>\
    <slot name="footer">\
      <!-- なければ何も表示しない -->\
    </slot>\
  </section>',

})


Vue.component('comp-refed', {
    template: '<div>...</div>',
    created: function() {
        // 自分自身のイベント
        this.$on('open', function() {
            alert('攻撃したぜウォウウォウ')
        })
    }
})

Vue.component('component-b', {
    template: '<p>bus: {{ bus.count }}</p>',
    computed: {
        // busのデータを算出プロパティに使用
        bus: function() {
            return bus.$data
        }
    },
    created: function() {
        bus.$on('bus-event', function() {
            this.count++
        })
    }
})

Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}\
    <button v-on:click="doAttack">攻撃する</button></li>',
    props: {
        id: Number,
        name: String,
        hp: Number
    },
    methods: {
        // ボタンのクリックイベントのハンドラから$emitでattackを発火する
        doAttack: function() {
            // 引数として自分のIDを渡す
            this.$emit('attack', this.id)
            bus.$emit('bus-event')
        }
    }
})

new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        date: "2020-08-01",
        name: 'スライム',
        hp: 100
    },
    methods: {
        // attackが発生した！
        handleAttack: function(id) {
            // 引数のIDから要素を検索
            var item = this.list.find(function(el) {
                    return el.id === id
                })
                // HPが0より多ければ10減らす
            if (item !== undefined && item.hp > 0) item.hp -= 10
            this.handleClick()
        },
        handleClick: function() {
            // 子コンポーネントのイベントを発火
            this.$refs.child.$emit('open')
        }
    }
})