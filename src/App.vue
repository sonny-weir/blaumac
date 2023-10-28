<script setup lang="ts">
</script>

<template>
  <div class="logo">
    <img src="/logo.gif" alt="Blaumac logo">
  </div>
  <div>
    <nav>
      <ul>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
        <li><router-link to="/privacy">Privacy Policy</router-link></li>
        <li><router-link to="/whatsapp">WhatsApp Policy</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
  /* Basic reset and body styling */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

  }

  /* Logo styling */
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5em;
    margin-bottom: 1.5em;
  }

  .logo img {
    max-height: 100%;
  }

  /* Navigation styling */
  nav {
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: #333;
    transition: background-color 250ms ease;
  }

  nav ul li a:hover {
    background-color: #EDEDED;
  }

  nav ul li a.router-link-active {
    background-color: #E0E0E0;
  }

  h2 {
    font-size: 1.6em;
    margin-bottom: 20px;
    color: #444;
    padding: 0px 20px;
  }

  h3 {
    font-size: 1.5em;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #444;
    padding: 0px 20px;
  }

  p {
    padding: 15px 20px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }

  input[type="text"] {
    padding: 10px 15px;
    border: 1px solid #CCC;
    border-radius: 5px;
    outline: none;
    transition: border-color 250ms ease;
    font-size: 1.1em;
    margin-bottom: 20px;
  }

  input[type="text"]:focus {
    border-color: #555;
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #333;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 250ms ease;
    font-size: 1.1em;
  }

  button:hover {
    background-color: #444;
  }

</style>
