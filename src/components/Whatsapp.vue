<script setup lang="ts">

</script>

<template>
  <h2>WhatsApp Policy</h2>
  <p>We only use WhatsApp to respond to your inquiries or service requests and do not send unsolicited messages.</p>
  <p>If you wish to opt out of our WhatsApp notifications, please enter your number here.</p>
  <div>
    <input type="text" placeholder="Your WhatsApp number" size="25" class="input-margin">
    <router-link to="/whatsapp_out" target="_blank" class="btn-style">Opt-Out from WhatsApp Notifications</router-link>
  </div>

</template>

<style scoped>
  .input-margin {
    margin: 0 10px 0 20px;
  }
</style>
