new Vue({
    el: '#app',
    data: {
        show: true,
        count: 0,
        order: false,
        list: [
            { id: 1, name: 'いちご', price: 100 },
            { id: 2, name: 'にんじん', price: 200 },
            { id: 3, name: 'サンダル', price: 300 },
            { id: 4, name: 'ヨット', price: 300 },
            { id: 5, name: 'ごましお', price: 300 },
            { id: 6, name: 'ロケット', price: 300 },
            { id: 7, name: '七面鳥', price: 300 },
            { id: 8, name: 'はち', price: 300 },
        ],
    },
    computed: {
        // orderの値でリストの順番を反転する算出プロパティ
        sortedList: function() {
            // LodashのorderByメソッドを使用
            return _.orderBy(this.list, 'id', this.order ? 'desc' : 'asc')
        }
    }
})