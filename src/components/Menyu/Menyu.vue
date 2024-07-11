<template>
  <div class="container">
    <div class="menyu-home">
      <h1 class="h1">Menyu</h1>

      <div class="box">
        <ul>
          <li @click="selectCategory(1)" :class="{ active: currentPage === 1 }">
            All category
          </li>
          <li @click="selectCategory(2)" :class="{ active: currentPage === 2 }">
            Dinner
          </li>
          <li @click="selectCategory(3)" :class="{ active: currentPage === 3 }">
            Lunch
          </li>
          <li @click="selectCategory(4)" :class="{ active: currentPage === 4 }">
            Dessert
          </li>
          <li @click="selectCategory(5)" :class="{ active: currentPage === 5 }">
            Drink
          </li>
        </ul>
      </div>
      <div class="Menyu">
        <div
          v-for="(item, index) in paginatedItems"
          :key="index"
          class="menu-item"
        >
          <img :src="item.image" :alt="item.name" class="item-images" />
          <h2>{{ item.name }}</h2>
          <div class="rating">
            <span
              v-for="star in 5"
              :key="star"
              @click="setRating(item, star)"
              :class="{ active: star <= item.rating }"
              >&#9733;</span>
          </div>
          <p>{{ item.description }}</p>
          <div class="price-order">
            <span class="price">{{ item.price }}</span>
            <button @click="addToCart" class="order-btn">Order now</button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">
          Previous
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCart } from "../Order/store";
import menuItemsData from "/src/MenyuItems.json"
const items = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;

const { addToCart } = useCart();
const setRating = (item, value) => {
  item.rating = value; 
};


const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage);
});


const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    if (currentPage.value === 1) {
      selectCategory(1); // Select the first category when going back to page 1
    }
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const selectCategory = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  items.value = menuItemsData; 
});

</script>


<style scoped>
.menyu-home {
  padding-top: 100px;
  .h1 {
    font-size: 70px;
    line-height: 88px;
    margin: 60px 0px;
    text-align: center;
  }

  .box {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      margin-bottom: 50px;
      margin-top: 30px;
      user-select: none;

      li {
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 20px;
        font-weight: 600;
        transition: 0.9s;
      }
      li {
        background: rgb(194, 186, 186);
      }

      li:hover {
        background: #311f09;
        color: #dfff;
        transform: scale(1.07);
      }

      li:active {
        transform: scale(1);
      }

      .active {
        background-color: #311f09;
        color: #fff;
      }
    }
  }

  .menu-item {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(1, 1, 1, 0.15);
    padding: 20px;
    text-align: center;
    max-width: 300px;
    margin: auto;
  }

  .item-images {
    width: 260px;
    height: 260px;
    border-radius: 8px;
  }

  h2 {
    margin: 20px 0 10px;
  }

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

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }

  .price-order {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 20px;
    font-weight: bold;
  }

  .order-btn {
    background: #ff7f27;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 20px;
  }

  .order-btn:hover {
    background: #e67e22;
  }

  .Menyu {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 80px 50px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 100px;
  }

  .pagination button {
    background: #311f09;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    margin: 0 10px;
  }

  .pagination button:hover {
    background: #e67e22;
  }

  .pagination button:disabled {
    background: #beb9b9;
    cursor: not-allowed;
  }
}
</style>
