var app = new Vue({
    el: '#app',
    data: {
        list: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ],
        message: "最初の一回だけ、変更を監視しています",
        edited: false,
        width: 799,
        order: false,
        budget: 300,
        limit: 2,
        items: [
            { id: 1, name: 'にんじん', price: 100 },
            { id: 2, name: 'サンダル', price: 200 },
            { id: 3, name: 'ヨット', price: 100000 },
            { id: 4, name: 'ごましお', price: 1 },
            { id: 5, name: 'ロケット', price: 3000000000 }
        ]
    },
    created: function() {

        var unwatch = this.$watch('width', function(newVal, oldVal) {
            this.message = oldVal + "から" + newVal + "に変わりましたね～"
            this.edited = true
                // 監視を解除
            unwatch()
        })

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
            return this.items.filter(function(el) {
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
        current: function(val) {
            // GitHubのAPIからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: 'topic:' + val
                }
            }).then(function(response) {
                this.list = response.data.items
            }.bind(this))
        }
    }
})