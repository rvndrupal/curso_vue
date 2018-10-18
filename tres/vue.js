var app = new Vue({

    el: '.main',
    data: {
        mensaje: 'Bienvenidos tres',
        imagen: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        mostrarMensaje: function() {
            return this.mensaje
                //return 'Hola desde la funcion'
        }
    }



})