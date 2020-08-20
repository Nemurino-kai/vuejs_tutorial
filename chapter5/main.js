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

new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    }
})