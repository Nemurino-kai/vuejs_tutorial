Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    props: {
        name: {
            type: String,
            required: true,
        },
        hp: {
            type: Number,
            required: true,
        },
    }

})

Vue.component('comp-event', {
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
        // ボタンのクリックイベントのハンドラでchilds-eventを発火する
        handleClick: function() {
            this.$emit('childs-event')
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
        ]
    },
    methods: {
        // childs-eventが発生した！
        parentsMethod: function() {
            alert('イベントをキャッチ！ ')
        }
    }
})