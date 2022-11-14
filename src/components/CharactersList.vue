<script>
import CharacterItem from './CharacterItem.vue'
import { store } from '../store'

export default {
    name: 'CharactersList',
    components: {
        CharacterItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="characters p-4 my-5">
        <div class="characters_numbers">
            <p class="p-3">Found 62 characters</p>
        </div>
        <div class="row row-cols-5 p-3  g-3 text-center">
            <CharacterItem :character="character" v-for="character in store.characters"></CharacterItem>
        </div>
    </div>
</template>