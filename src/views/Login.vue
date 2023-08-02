<script setup>
import { RouterLink, RouterView } from 'vue-router';
import FormularioLogin from '@/components/FormularioLogin.vue';

</script>

<template>
  <div>
    <FormularioLogin />
    <div>
      <button><RouterLink to="/Registro">No tengo una cuenta</RouterLink></button>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
button {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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

</style>
