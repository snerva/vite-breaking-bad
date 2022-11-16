<script>
import axios from 'axios'
import CharactersList from './CharactersList.vue';
import SelectCategory from './SelectCategory.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    components: {
        CharactersList,
        SelectCategory
    },
    data() {
        return {
            store
        }
    },
    methods: {
        callApi(url) {
            //console.log('click');
            console.log(this.store.cat);
            let categorySelected = this.store.cat
            if (categorySelected !== '') {
                url = `${this.store.API_URL}?category=${categorySelected}`
                console.log(url);
            }

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
    <main>
        <div class="container">
            <SelectCategory @selectData="callApi(url)"></SelectCategory>
            <CharactersList></CharactersList>
        </div>
    </main>
</template>

<style>

</style>

