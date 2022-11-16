import {
    reactive
} from 'vue'

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    info: null,
    error: null,
    loading: true,
    cat: '',
    options: [
        { text: 'Breaking Bad', value: 'Breaking' },
        { text: 'Better Call Saul', value: 'Better' }
    ]
})