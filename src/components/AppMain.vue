<script>
import CharactersList from './CharactersList.vue';
import SelectCategory from './SelectCategory.vue';
export default {
    name: "AppMain",
    components: {
        CharactersList,
        SelectCategory
    },
}
</script>

<template>
    <main>
        <div class="container">
            <SelectCategory></SelectCategory>

            <CharactersList></CharactersList>
        </div>
    </main>
</template>

<style>

</style>

