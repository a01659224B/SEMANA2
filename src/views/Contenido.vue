<script setup>
import { RouterLink, RouterView} from 'vue-router';
import { ref } from 'vue';
import Tabla from '@/components/Tabla.vue';

let pokemon = ref([]);
let loading = ref(true);

const getData = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    pokemon.value = data.results;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

getData();

</script>

<template>
    <div>
    <button><RouterLink to="/Registro">Regresar</RouterLink></button>
    <div>
      <section>
        <Tabla :pokemons="pokemon" />
      </section>
      <RouterView />
    </div>
    </div>
  </template>

