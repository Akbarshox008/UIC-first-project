import { ref } from 'vue';

const cartItems = ref([]);

export function useCart() {
  function addToCart(item) {
    // Shu item cartda bormi, tekshiramiz (id bo‘yicha)
    const existingItem = cartItems.value.find(i => i.id === item.id);

    if (existingItem) {
      // Agar mavjud bo‘lsa, count ni oshiramiz
      existingItem.count += 1;
    } else {
      // Yangi item qo‘shamiz va count ni 1 qilamiz
      cartItems.value.push({
        ...item,
        count: 1
      });
    }
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
