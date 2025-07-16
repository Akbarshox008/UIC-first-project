<template>
  <section class="w-full py-16">
    <div class="container mx-auto px-4">
      <!-- Sarlavha -->
      <h1 class="text-3xl sm:text-4xl md:text-[70px] leading-tight md:leading-[88px] text-center font-bold mb-12">
        Our popular menu
      </h1>

      <!-- Kategoriya tugmalari -->
      <ul class="flex flex-wrap items-center justify-center gap-4 mb-12 select-none">
        <li v-for="cat in categories" :key="cat.id" @click="selectCategory(cat.id)" :class="[
          'cursor-pointer px-4 sm:px-6 py-2 rounded-full font-semibold text-base sm:text-lg transition duration-300',
          currentPage === cat.id
            ? 'bg-[#311f09] text-white'
            : 'bg-gray-300 hover:bg-[#311f09] hover:text-white hover:scale-105'
        ]">
          {{ cat.name }}
        </li>
      </ul>

      <!-- Menu grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-14 gap-x-6 sm:gap-x-8">
        <div v-for="(item, index) in paginatedItems" :key="index"
          class="bg-white rounded-lg shadow-md p-5 text-center flex flex-col items-center w-full">
          <img :src="item.image" :alt="item.name"
            class="w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] rounded-lg object-cover mb-4" />
          <h2 class="text-lg sm:text-xl font-bold mb-2">{{ item.name }}</h2>

          <!-- Rating yulduzlari -->
          <div class="flex justify-center mb-3">
            <span v-for="star in 5" :key="star" @click="setRating(item, star)" :class="[
              'text-xl sm:text-2xl cursor-pointer transition-colors duration-300',
              star <= item.rating ? 'text-yellow-400' : 'text-gray-400'
            ]">
              &#9733;
            </span>
          </div>

          <p class="text-sm text-gray-600 mb-4">{{ item.description }}</p>

          <!-- Narx va Order -->
          <div class="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-0">
            <span class="text-lg font-bold">{{ item.price }}</span>
            <button
              class="bg-[#FF7F27] hover:bg-[#e67e22] text-white px-5 py-2 rounded-full transition duration-300 w-full sm:w-auto">
              Order now
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex flex-wrap justify-center gap-4 mt-12">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="bg-[#311f09] disabled:bg-gray-400 text-white px-5 py-2 rounded-md transition hover:bg-[#e67e22] disabled:cursor-not-allowed w-[130px]">
          Previous
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="bg-[#311f09] disabled:bg-gray-400 text-white px-5 py-2 rounded-md transition hover:bg-[#e67e22] disabled:cursor-not-allowed w-[130px]">
          Next
        </button>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const currentPage = ref(1);
const itemsPerPage = 6;

const categories = [
  { id: 1, name: "All category" },
  { id: 2, name: "Dinner" },
  { id: 3, name: "Lunch" },
  { id: 4, name: "Dessert" },
  { id: 5, name: "Drink" },
];

const items = ref([]);
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
  item.rating = value;
};

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return items.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage));

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const selectCategory = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  items.value = jsonData;
});
</script>
