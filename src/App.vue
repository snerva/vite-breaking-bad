<script>
import axios from 'axios'
import AppMain from './components/AppMain.vue'
import SelectCategory from './components/SelectCategory.vue';
import { store } from './store'
export default {
  name: 'App',
  components: {
    AppMain,
    SelectCategory
  },
  data() {
    return {
      store
    }
  },
  methods: {
    changeCategory() {
      //console.log('click');
      console.log(this.store.cat);
      let categorySelected = this.store.cat
      const url = `${this.store.API_URL}?category=${categorySelected}`
      console.log(url);

      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.characters = response.data;
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
  }
}
</script>

<template>
  <header>
    <h1 class="m-3">Breaking Bad Api</h1>
    <div class="container">
      <SelectCategory @selectData="changeCategory"></SelectCategory>
    </div>
  </header>
  <AppMain></AppMain>

</template>

<style lang="scss" scoped>

</style>
