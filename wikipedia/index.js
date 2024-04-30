const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const themeToggler = document.getElementById('theme-toggler');
const body = document.body;

async function searchWikipedia(query){
    const encodedQuery = encodeURIComponent(query);
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`;
    const response = await fetch(endpoint);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
    }

function displayResults(results){
    searchResults.innerHTML = '';

    resultsforEach((result) => {
        const url = `https://en.wikipedia.org/?curid=${results.pageid}`;
        const titleLink = `<a href="${url}" target='_blank' rel='noopener'>${result.title} </a>`;`
        const urlLink = 
    })
}
