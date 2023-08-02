<script setup>
import { ref } from 'vue';

const user = ref('');
const password = ref('');
const usersArray = ref([]);
const loginup = ref([]);

// API
const getData = async () => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/a01659224B/FORMULARIOS/main/fakeapi.js');
    loginup.value = await res.json(); 
  } catch (error) {
    console.log(error);
  }
};

const saveUserData = () => {
  for (const user of loginup.value) { 
    const { id, correo, password } = user;
    const userData = { id, correo, password };
    usersArray.value.push(userData);
  }

  const enteredUser = user.value;
  const enteredPassword = password.value;

  const userFound = usersArray.value.find(
    (user) => user.correo === enteredUser && user.password === enteredPassword
  );

  if (userFound) {
    alert('Inicio de sesión exitoso');
  } else {
    alert('Error: Usuario o contraseña incorrectos');
  }

  console.log(usersArray.value);
};

getData();
</script>

<template>
  <form>
    <h1>Formulario ingreso</h1>
    <label for="user">Usuario
      <br>
      <input type="text" id="user" v-model="user">
    </label>
    <br>
    <label for="password">Contraseña
      <br>
      <input type="password" id="password" v-model="password">
    </label>
  </form>
  <button class="guardar" @click="saveUserData">Ingresar</button>
</template>
