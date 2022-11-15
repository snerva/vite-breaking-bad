import {
    reactive
} from 'vue'

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    info: null,
    error: null,
    options: [
        { text: 'Breaking Bad', value: 'breaking' },
        { text: 'Better Call Saul', value: 'better' }
    ]
})