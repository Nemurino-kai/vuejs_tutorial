var app = new Vue({
    el: '#app',
    data: {
        message: "kon~",
        show: true,
    },
    methods: {
        handleClick: function(event) {
            alert("クリックしたぜ")
        },

        handleInput: function(event) {
            alert("変更したぜ")
        }

    }
})