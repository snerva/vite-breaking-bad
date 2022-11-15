<script>
import { store } from '../store'
export default {
    name: 'SelectCategory',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <select class="form-select" v-model="categorySelect" @change="changeCategory">
        <option value="">Select category</option>
        <option value="breaking">Breaking Bad</option>
        <option value="better">Better Call Saul</option>
    </select>
</template>

<style>

</style>