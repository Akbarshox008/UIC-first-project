<template>
    <div class="menu">
      <h1>Menu</h1>
      <ul class="menu-list">
        <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <article>
            <img :src="item.image" alt="">
            </article>
          {{ item.name }} - ${{ item.price }}
          <button @click="addToCart(item)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useCart } from './store.js';
  import menuItemsData from '/src/MenyuItems.json';
  
  const menuItems = ref([]);
  
  onMounted(() => {
    menuItems.value = menuItemsData;
  });
  
  const { addToCart } = useCart();
  </script>
  
  <style scoped>
  .menu {
    padding: 20px;
    padding-top: 100px;
  }
  
  .menu h1 {
    text-align: center;
    color: #333;
  }
  
  .menu-list {
    list-style-type: none;
    padding: 0;
  }
  
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .menu-item button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .menu-item button:hover {
    background-color: #0056b3;
  }
  </style>
  