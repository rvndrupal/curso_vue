new Vue({
    el: '.main',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,

    },
    computed: {
        total: function() {
            return this.primero + this.segundo + this.tercero
        }
    }
})