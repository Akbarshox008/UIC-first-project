<template>
    <div class="shopping-cart">
      <h1>Shopping Cart</h1>
      <ul class="cart-list">
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <article>
                <img :src="item.image" alt="">
                <article class="rating">
                    <span
                  v-for="star in 5"
                  :key="star"
                  @click="setRating(item, star)"
                  :class="{ active: star <= item.rating }"
                  >&#9733;</span>
                </article>
            </article>
            {{ item.description }}
          {{ item.name }} - ${{ item.price }}
          <button @click="removeFromCart(index)" class="remove-button">Remove</button>
        </li>
      </ul>
      <div v-if="cartItems.length === 0" class="empty-cart">Your cart is empty</div>
    </div>
  </template>
  
  <script setup>
  import { useCart } from '../Order/store.js';
  
  const { cartItems, removeFromCart } = useCart();
  const setRating = (item, value) => {
  item.rating = value; 
};

  </script>
  
  
  
  
  <style scoped>

  
.rating {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .rating span {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
  }

  .rating span.active {
    color: #f39c12;
  }
  img{
    width: 50px;
  }
  .shopping-cart {
    padding: 20px;
    text-align: center;
    padding-top: 100px;
  }
  
  .shopping-cart h1 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .cart-list {
    list-style-type: none;
    padding: 0;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 50%;
  }
  
  .cart-item button {
    padding: 5px 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .cart-item button:hover {
    background-color: #c82333;
  }
  
  .empty-cart {
    margin-top: 20px;
    color: #999;
  }
  </style>
  