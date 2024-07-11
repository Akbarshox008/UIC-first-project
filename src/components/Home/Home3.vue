<template>
  <div class="container">
    <div class="box">
      <h1>Our popular menu</h1>
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
            >&#9733;</span
          >
        </div>
        <p>{{ item.description }}</p>
        <div class="price-order">
          <span class="price">{{ item.price }}</span>
          <button class="order-btn">Order now</button>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const items = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;

const jsonData = [
  {
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza with fresh basil.",
    price: "$8.99",
    rating: 4,
    image:
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1719897027~exp=1719900627~hmac=dce64e05c64297eaf74af64c0983f986e84b8725429b3b16fb28cf328f4bdec6&w=740",
  },
  {
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni with mozzarella cheese.",
    price: "$10.99",
    rating: 5,
    image: "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?w=740&t=st=1719900438~exp=1719901038~hmac=670dce9636353018dd4f6fd419a4d4355510790f6150303221d379cfa34103b4",
  },
  {
    name: "Hawaiian Pizza",
    description: "Ham and pineapple with mozzarella cheese.",
    price: "$11.49",
    rating: 3,
    image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=sph",
  },
  {
    name: "BBQ Chicken Pizza",
    description: "BBQ sauce, grilled chicken, red onions, and cilantro.",
    price: "$12.99",
    rating: 4,
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
  },
  {
    name: "Veggie Supreme Pizza",
    description: "Bell peppers, olives, onions, and mushrooms.",
    price: "$9.99",
    rating: 4,
    image: "https://t4.ftcdn.net/jpg/03/21/32/45/360_F_321324549_3utrdpZOFdsyUElymaPhm5LXRyTpnteh.jpg",
  },
  {
    name: "Four Cheese Pizza",
    description: "Mozzarella, cheddar, parmesan, and blue cheese.",
    price: "$12.49",
    rating: 5,
    image: "https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
  },
  {
    name: "Buffalo Chicken Pizza",
    description: "Buffalo sauce, grilled chicken, and mozzarella cheese.",
    price: "$13.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfmfHybOzdLG1Yhi_-yaY5Gc_uF2ggG-fVg&s",
  },
  {
    name: "Meat Lovers Pizza",
    description: "Pepperoni, sausage, ham, and bacon.",
    price: "$14.99",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtV9tKqYM-0WMI3O6bYzXdBSqV24849rZvLg&s",
  },
  {
    name: "Mushroom Pizza",
    description: "Mushrooms, mozzarella cheese, and fresh herbs.",
    price: "$9.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvh-W6C7manIQxWPQmG45SLILDdDPsvTDWAw&s",
  },
  {
    name: "Spinach and Feta Pizza",
    description: "Spinach, feta cheese, and garlic.",
    price: "$10.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
  },
  {
    name: "Taco Pizza",
    description: "Ground beef, lettuce, tomatoes, and cheddar cheese.",
    price: "$12.99",
    rating: 4,
    image: "https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-126542538-6178171.jpg.transform/lh-dcep-transform-width-1440/img.jpg",
  },
  {
    name: "Shrimp Scampi Pizza",
    description: "Shrimp, garlic, olive oil, and mozzarella cheese.",
    price: "$14.49",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCk_XZtyNO1LtOcVGYv3ajJpw6jBnP7GKeg&s",
  },
  {
    name: "Prosciutto Pizza",
    description: "Prosciutto, arugula, and mozzarella cheese.",
    price: "$13.99",
    rating: 5,
    image: "https://img.freepik.com/free-vector/top-view-food-dishes-with-flat-design_23-2147848010.jpg",
  },
  {
    name: "Buffalo Cauliflower Pizza",
    description: "Buffalo sauce, roasted cauliflower, and mozzarella cheese.",
    price: "$11.99",
    rating: 4,
    image: "https://www.shutterstock.com/image-photo/chicken-fillet-salad-healthy-food-260nw-1721943142.jpg",
  },
  {
    name: "Greek Pizza",
    description: "Feta cheese, olives, tomatoes, and spinach.",
    price: "$12.49",
    rating: 4,
    image: "https://www.shutterstock.com/shutterstock/photos/2331689879/display_1500/stock-photo-fuel-up-your-mind-top-view-image-featuring-lunch-box-with-sandwiches-fruits-and-vegetables-water-2331689879.jpg",
  },
  {
    name: "Chicken Alfredo Pizza",
    description: "Alfredo sauce, grilled chicken, and mozzarella cheese.",
    price: "$13.49",
    rating: 5,
    image: "https://www.eatingwell.com/thmb/zvHrm_Z8F2qLeJenpJ6lYodtq7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57831531-73819d8ce8f5413cac42cf1c907bc37a.jpg",
  },
  {
    name: "Sausage and Peppers Pizza",
    description: "Italian sausage, bell peppers, and mozzarella cheese.",
    price: "$11.99",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgDqJRTPHMxxXICoXU9LoJouMQgDcARbd9g&s",
  },
  {
    name: "Pesto Chicken Pizza",
    description: "Pesto sauce, grilled chicken, and mozzarella cheese.",
    price: "$12.99",
    rating: 5,
    image: "https://noworriescurries.com.au/cdn/shop/articles/PHOTO-2021-02-01-12-44-49_1024x1024.jpg?v=1612149686",
  },
  {
    name: "BBQ Pulled Pork Pizza",
    description: "BBQ sauce, pulled pork, and mozzarella cheese.",
    price: "$13.99",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShexaiJpAQkfSX8QPSfv1w3FnVr4zvtAP1Yw&s",
  },
  {
    name: "Mediterranean Pizza",
    description: "Feta cheese, olives, artichokes, and red onions.",
    price: "$12.49",
    rating: 4,
    image: "https://t3.ftcdn.net/jpg/03/01/97/86/360_F_301978652_O0aPwap1JaEVaAhj3mIlbqNnJGmRyCzC.jpg",
  },
  {
    name: "Buffalo Ranch Pizza",
    description: "Buffalo sauce, ranch dressing, and grilled chicken.",
    price: "$13.49",
    rating: 5,
    image: "https://img.freepik.com/free-photo/tartlets-with-pistachios-strawberry-cream-chocolate-side-view_141793-4154.jpg",
  },
  {
    name: "Steak and Cheese Pizza",
    description: "Steak, cheddar cheese, and onions.",
    price: "$14.99",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx7wMoMXa6NSuAeFVoJfVTHNm2MfO9NlC1w&s",
  },
  {
    name: "White Pizza",
    description: "Ricotta cheese, garlic, and mozzarella cheese.",
    price: "$10.99",
    rating: 4,
    image: "https://www.shutterstock.com/image-photo/delicious-chocolate-roll-sponge-cake-260nw-1370104718.jpg",
  },
  {
    name: "Truffle Mushroom Pizza",
    description: "Truffle oil, mushrooms, and mozzarella cheese.",
    price: "$14.49",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfA6GXa0E0PebyCGD65CS_XWUsaq3tYAzKQ&s",
  },
  {
    name: "Zucchini and Tomato Pizza",
    description: "Zucchini, tomatoes, and mozzarella cheese.",
    price: "$11.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAGo7eGPH8IvEffx74-AetGHKGFwhB8SZ-w&s",
  },
  {
    name: "Artichoke and Spinach Pizza",
    description: "Artichokes, spinach, and mozzarella cheese.",
    price: "$12.99",
    rating: 4,
    image: "https://t3.ftcdn.net/jpg/06/27/79/34/360_F_627793462_UI9lLQsov6A56B1d5f0QSDEPjVqif3rv.jpg",
  },
  {
    name: "BBQ Brisket Pizza",
    description: "BBQ sauce, brisket, and mozzarella cheese.",
    price: "$14.99",
    rating: 5,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fHww",
  },
  {
    name: "Caprese Pizza",
    description: "Tomatoes, fresh basil, and mozzarella cheese.",
    price: "$10.99",
    rating: 4,
    image: "https://img.freepik.com/free-photo/colorful-cocktails-with-ice_144627-21746.jpg",
  },
  {
    name: "Caramelized Onion Pizza",
    description: "Caramelized onions, mozzarella cheese, and fresh thyme.",
    price: "$11.99",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Lrk-8DeNxETXiIBCIkRWusOQPtm_IqV_SQ&s",
  },
  {
    name: "Cheeseburger Pizza",
    description: "Ground beef, cheddar cheese, onions, and pickles.",
    price: "$12.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81mt76xpMGL._SL1500_.jpg",
  },
  {
    name: "Chicken Bacon Ranch Pizza",
    description: "Ranch dressing, grilled chicken, and bacon.",
    price: "$13.49",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
  },
  {
    name: "Clam Pizza",
    description: "Clams, garlic, olive oil, and mozzarella cheese.",
    price: "$14.99",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60ESigzhGqn4I8WauWODhfugXr-A1b9qGow&s",
  },
  {
    name: "Eggplant Parmesan Pizza",
    description: "Eggplant, marinara sauce, and mozzarella cheese.",
    price: "$12.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDu7Y-TOLjEmKBND_A_S0QzLhidFVD3gzSCQ&s",
  },
  {
    name: "Fig and Prosciutto Pizza",
    description: "Figs, prosciutto, and mozzarella cheese.",
    price: "$14.49",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQfjge5wtYCjTFDS25TRV79nhA8dzjXOiDg&s",
  },
  {
    name: "Grilled Veggie Pizza",
    description: "Grilled vegetables and mozzarella cheese.",
    price: "$11.49",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSHwvLv0cKdsKS1CdHs31s4QXQmSkVS0TZA&s",
  },
  {
    name: "Honey BBQ Chicken Pizza",
    description: "Honey BBQ sauce, grilled chicken, and mozzarella cheese.",
    price: "$13.49",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_UfbWQs6FHqrp7XXNIvEOeS139kElhNB1A&s",
  }
];

const setRating = (item, value) => {
  item.rating = value; // Update rating directly on the item object
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
  items.value = jsonData;
});
</script>

<style scoped>
h1 {
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

    li:first-child {
      background: #311f09;
      color: #fff;
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
</style>
