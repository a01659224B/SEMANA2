<script setup>
import { ref } from 'vue';

const usuario = ref({
  nombre: '',
  apellido: '',
  edad: '',
  correo: '',
  password: '',
  opciones: [],
  admin: false,
});

function restablecer() {
  usuario.value = {
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    password: '',
    opciones: [],
    admin: false,
  };
}
</script>

<template>
  <main>
    <form id="registro">
    <h1>Formulario de Registro</h1>
    <label for="nombre">
      Nombre 
      <br>
      <input type="text" id="nombre" v-model="usuario.nombre">
    </label>
    <br>
    <label for="apellido">Apellido
      <br>
      <input type="text" id="apellido" v-model="usuario.apellido">
    </label>
    <br>
    <label for="edad">Edad</label>
    <label>
      <input type="number" name="edad" id="edad" min="18" v-model="usuario.edad">
    </label>
    <br>
    <label for="correo">Correo
      <br>
      <input type="email" name="correo" id="correo" v-model="usuario.correo">
    </label>
    <br>
    <label for="password">Contraseña
      <br>
      <input type="password" id="password" v-model="usuario.password">
    </label>
    <br>
    <label>
      Interéses
    </label>
    <br>
    <label for="HTML"> HTML
      <input type="checkbox" id="HTML" name="opciones" v-model="usuario.opciones" value="HTML"> 
    </label>
    <label for="CSS"> CSS
      <input type="checkbox" id="CSS" name="opciones" v-model="usuario.opciones" value="CSS"> 
    </label>
    <label for="JavaScript"> JavaScript
      <input type="checkbox" id="JavaScript" name="opciones" v-model="usuario.opciones" value="JavaScript"> 
    </label>
    <label for="Vue.js"> Vue.js
      <input type="checkbox" id="Vue.js" name="opciones" v-model="usuario.opciones" value="Vue.js"> 
    </label>
    <br>
    <label for="admin"> ¿Usuario amdministrador?
      <input type="checkbox" id="admin" name="opciones" v-model="usuario.useradmin" value="admin"> 
    </label>
    <br>
    <button type="submit" class="guardar">Guardar</button>
    <button type="reset" @click="restablecer">Borrar</button>
  </form>
  </main>
</template>