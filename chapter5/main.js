var myComponent = {
    template: '<p>まいこんぽーねんと</p>'
}

var app = new Vue({
    el: '#app',
    components: {
        'my-component': myComponent
    }
})