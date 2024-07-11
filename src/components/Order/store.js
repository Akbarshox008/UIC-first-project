import { ref } from 'vue';

const cartItems = ref([]);

export function useCart() {
  function addToCart(item) {
    cartItems.value.push(item);
  }

  function removeFromCart(index) {
    cartItems.value.splice(index, 1);
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
  };
}
