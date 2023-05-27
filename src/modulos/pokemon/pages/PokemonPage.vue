<template>
    <h1>Pokemon Page</h1>
    <p>Pokemon: #{{ id }}</p>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },

    },
    data() {
        return {
            //   id:null,
            pokemon: null
        }
    },
    created() {
        // console.log(this.$route);
        // const {id}=this.$route.params;
        //this.id=id;
        this.getPokemon();
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(response => response.json());
                console.log(pokemon);
                this.pokemon = pokemon;
            } catch (error) {
                console.log(error);
                this.$router.push('/')
            }

        }

    },
    watch: {
        id() {
            this.getPokemon();
        }
    }
}
</script>