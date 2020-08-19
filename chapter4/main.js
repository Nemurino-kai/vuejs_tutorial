var app = new Vue({
    el: '#app',
    data: {
        width: 799
    },
    computed: {
        halfWidth: {
            get: function() {
                return this.width / 2
            },
            set: function(val) {
                this.width = val * 2
            }
        }
    }
})