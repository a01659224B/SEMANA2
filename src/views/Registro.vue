<script setup>
import { RouterLink, RouterView } from 'vue-router';
import FormularioRegistro from '@/components/FormularioRegistro.vue';

</script>

<template>
  <div>
    <FormularioRegistro />
    <div>
      <button class="linkb"><RouterLink to="/Login">Ya tengo cuenta</RouterLink></button>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
form {
  max-width: 400px; 
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  border-radius: 5px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
button {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.link{
  color:darkcyan;
}

.guardar {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: green;
  color:antiquewhite;
  transition: background-color 0.3s ease;

}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

h1 {
  font-size: 40 px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  background-color: darkcyan;
  color:beige
}

.alert {
  background-color: #f44336;
  color: white; 
  padding: 15px;
  margin-bottom: 20px;     
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }

.linkb{
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>