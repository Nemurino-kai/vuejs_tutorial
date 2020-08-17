var app = new Vue({
    el: '#app',
    data: {
        show: true,
    },
    methods: {
        handleClick: function(event) {
            alert("クリックしたぜ")
        }
    }
})