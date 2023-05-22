const apiDeJuegos = {
    data(){
        return{
            juegos: []
        }
    },
    mounted(){
        this.traerJuegos()
    },
    methods: {
        traerJuegos(){
            fetch("https://api.rawg.io/api/games?key=aa2e1c5b1fdf46ada9240e4ab295ee9a")
            .then(response => response.json())
            .then(data => {this.juegos = data})
        }
    }
}

Vue.createApp(apiDeJuegos).mount("#cardsContainer")