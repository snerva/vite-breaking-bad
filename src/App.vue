<script>
import axios from 'axios'
import AppMain from './components/AppMain.vue'
import { store } from './store'
export default {
  name: 'App',
  components: {
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
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
  </header>

  <AppMain></AppMain>

</template>

<style lang="scss" scoped>

</style>
