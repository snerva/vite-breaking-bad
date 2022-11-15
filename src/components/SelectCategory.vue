<script>
import { store } from '../store'
export default {
    name: 'SelectCategory',
    data() {
        return {
            store,
            options: [
                { text: 'Breaking Bad', value: 'breaking' },
                { text: 'Better Call Saul', value: 'better' }
            ]
        }
    }
}
</script>

<template>
    <select class="form-select" @change="changeCategory">
        <option value="">Select category</option>
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
</template>

<style>

</style>