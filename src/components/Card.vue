<script setup>
import { ref, defineProps, onMounted, watch } from 'vue';

const { pokeUrl } = defineProps(['pokeUrl']);
const pokeUrlRef = ref(pokeUrl); 

let pokeDetails = ref(null);

watch(pokeUrlRef, async (newUrl) => {
  try {
    const res = await fetch(newUrl);
    const data = await res.json();
    pokeDetails.value = data;
  } catch (error) {
    console.log(error);
    pokeDetails.value = null;
  }
});

</script>

<template>
  <div v-if="pokeDetails">
    <div class="card">
      <div v-if="pokeDetails.sprites">
        <img v-if="pokeDetails.sprites.front_default" :src="pokeDetails.sprites.front_default" alt="Card Imagen">
        <h2>{{ pokeDetails.name }}</h2>
        <h3>Abilities:</h3>
        <ul>
          <li v-for="ability in pokeDetails.abilities" :key="ability.ability.name">
            {{ ability.ability.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  h5 {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #888;
    margin-bottom: 15px;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
  }
  
  </style>
