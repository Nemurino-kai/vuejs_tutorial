var app = new Vue({
    el: '#app',
    data: {
        width: 799,
        budget: 300,
        limit: 2,
        list: [
            { id: 1, name: 'にんじん', price: 100 },
            { id: 2, name: 'サンダル', price: 200 },
            { id: 3, name: 'ヨット', price: 100000 },
            { id: 4, name: 'ごましお', price: 1 },
            { id: 5, name: 'ロケット', price: 3000000000 }
        ]
    },
    computed: {
        halfWidth: {
            get: function() {
                return this.width / 2
            },
            set: function(val) {
                this.width = val * 2
            }
        },
        computedData: function() { return Math.random() },
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        limited: function() {
            return this.matched.slice(0, this.limit)
        }
    },
    methods: {
        methodsData: function() { return Math.random() }
    }
})