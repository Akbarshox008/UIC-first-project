<template>
    <div class="order-page">
      <h1>Hello Order Page</h1>
      <router-link to="/menuorder" class="link">Go to Menu</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  
  <style scoped>
  .order-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .link {
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .link:hover {
    background-color: #0056b3;
  }
  </style>
  