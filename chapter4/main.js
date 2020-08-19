var app = new Vue({
    el: '#app',
    data: {
        message: "変更を監視しています",
        width: 799,
        order: false,
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
        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        limited: function() {
            return this.sorted.slice(0, this.limit)
        }
    },
    methods: {
        methodsData: function() { return Math.random() }
    },
    watch: {
        width: function(newVal, oldVal) {
            this.message = oldVal + "から" + newVal + "に変わりましたね～"
        }
    }
})