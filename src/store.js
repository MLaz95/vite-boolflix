import {reactive} from 'vue';

export const store = reactive({
    // user input value from searchbar
    search: '',
    // array of movie objects from api
    movieResults: '',
    // array of tv objects from api
    tvResults: '',
    // settings from tmdb
    config: '',
    // the base string for every img path from tmdb
    posterBaseUrl: '',
    // two character code to retrieve country flag
    countryIsoCode: '',
    // common movie languages and related country codes
    commonLanguages: {
        'en': 'us',
        'ja': 'jp',
        'hi': 'in',
        'zh': 'cn',
        'ko': 'kr',
    }
});