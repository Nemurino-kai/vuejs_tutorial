var app = new Vue({
    el: '#app',
    data: {
        message: "kon~",
        show: true,
        val: "Nothing",
        multiCheck: []
    },
    methods: {
        handleClick: function(event) {
            alert("クリックしたぜ")
        },

        handleInput: function(event) {
            alert("変更したように見える？反映されてないんだな、これが")
        },

        rightClickIsBaned: function(event) {
            alert("右クリしたな？")
        },

        handler: function(comment) {
            console.log(comment)
        }
    }
})