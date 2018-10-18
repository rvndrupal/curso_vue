var app = new Vue({

    el: '.main',
    data: {
        mensaje: 'Bienvenidos'
    },
    methods: {
        mostrarMensaje: function() {
            return this.mensaje
                //return 'Hola desde la funcion'
        }
    }



})