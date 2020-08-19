var app = new Vue({
    el: '#app',
    data: {
        width: 799
    },
    computed: {
        halfWidth: function() {
            return this.width / 2;
        }
    }
})