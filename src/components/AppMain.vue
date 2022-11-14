<script>
import CharactersList from './CharactersList.vue'
export default {
    name: "AppMain",
    components: { CharactersList },
}
</script>

<template>
    <main>
        <div class="container">
            <select class="form-select">
                <option selected>Select category</option>
            </select>

            <CharactersList></CharactersList>
        </div>
    </main>
</template>

<style>

</style>

