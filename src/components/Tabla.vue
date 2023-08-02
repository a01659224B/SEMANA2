<script setup>
import { ref, defineProps, defineExpose } from 'vue';
import Card from '@/components/Card.vue';

const { pokemons } = defineProps(['pokemons']);

let selectedPokemonUrl = ref(null);

const showCard = (url) => {
  selectedPokemonUrl.value = url;
};
defineExpose({ showCard });
</script>

<template>
    <div class="table-container">
      <h1>Pokemons</h1>
      <table class="pokemon-table">
        <tbody>
          <tr v-for="poke in pokemons" :key="poke.name" class="pokemon-row">
            <td class="pokemon-name">{{ poke.name }}</td>
            <td class="pokemon-details">
              <button @click="showCard(poke.url)">Mostrar Card</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Card :pokeUrl="selectedPokemonUrl" v-if="selectedPokemonUrl" />
    </div>
  </template>
  
  

<style>

  h1 {
    text-align: center;
    text-shadow:8 8 8 0 red;
  }
  .table-container {
  max-width: 400px;
  margin: 0 auto;
}

.pokemon-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.pokemon-row {
  border-bottom: 1px solid #ddd;
}

.pokemon-name,
.pokemon-details {
  padding: 8px;
}

.pokemon-link {
  display: inline-block;
  padding: 6px 12px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.pokemon-link:hover {
  background-color: #ddd;
}
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