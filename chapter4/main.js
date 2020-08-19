var app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600
    },
    computed: {
        halfWidth: function() {
            return this.width / 2
        },
        halfHeight: function() {
            return this.height / 2
        },
        // 「width x height」の中心座標をオブジェクトで返す
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        }
    }
})