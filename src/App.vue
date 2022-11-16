<script>
import AppMain from './components/AppMain.vue'
import { store } from './store'
export default {
  name: 'App',
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
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
