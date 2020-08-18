var app = new Vue({
    el: '#app',
    data: {
        message: "kon~",
        show: true,
        val: "Nothing",
        multiCheck: [],
        preview: ""
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
        },

        handleChange: function(event) {
            var file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
})