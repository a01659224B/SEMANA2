<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="navbar">
        <RouterLink to="/Registro">Registro </RouterLink>
        <RouterLink to="/Login">Login </RouterLink>
        <RouterLink to="/Contenido">Contenido </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
header {
  background-color: beige;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: darkcyan;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

.navbar a:hover {
  background-color: orange;
}


</style>
