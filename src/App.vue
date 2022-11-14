<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      API_URL: 'https://www.breakingbadapi.com/api/characters',
      characters: null,
      info: null,
      error: null
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.characters = response.data;
        })
        .catch(err => {
          console.error(err.message);
          this.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.API_URL)
  }
}
</script>

<template>
  <header>
    <h1 class="m-3">Breaking Bad Api</h1>
  </header>

  <main>
    <div class="container">
      <select class="form-select">
        <option selected>Select category</option>
      </select>

      <div class="characters">
        <div class="row row-cols-5">
          <div class="col p-3" v-for="character in characters">
            <div class="character">
              <img :src="character.img" :alt="character.name" class="img-fluid">
              <h4>{{ character.name }}</h4>
              <div class="category">{{ character.category }}</div>
              <div class="status">{{ character.status }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>

</style>
