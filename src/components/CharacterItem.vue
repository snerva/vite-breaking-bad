<script>
export default {
    name: 'CharacterItem',
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="character p-3">
            <img :src="character.img" :alt="character.name" class="img-fluid">
            <h6 class="p-3">{{ character.name }}</h6>
            <div class="category">{{ character.category }}</div>
            <small class="status">{{ character.status }}</small>
        </div>
    </div>
</template>

<style>

</style>