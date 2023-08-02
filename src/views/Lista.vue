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
    <div>
      <section>
        <Tabla v-for="item in pokemon" :key="item.name"
          :name="item.name"
          :url="item.url"
        />
      </section>
    </div>
    </div>
  </template>