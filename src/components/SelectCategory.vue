<script>
import { store } from '../store'
export default {
    name: 'SelectCategory',
    emits: ['selectData'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <select class="form-select" v-model="store.cat" @change="$emit('selectData')">
        <option value="">Select category</option>
        <option v-for="option in store.options" :value="option.value">{{ option.text }}
        </option>
    </select>
</template>

<style>

</style>