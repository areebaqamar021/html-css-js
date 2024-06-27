document.getElementById('searchButton').addEventListener('click', searchWikipedia);

function searchWikipedia() {
    const query = document.getElementById('searchInput').value;
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.query.search);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const title = document.createElement('h2');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const snippet = document.createElement('p');
        snippet.innerHTML = article.snippet;
        articleDiv.appendChild(snippet);

        const link = document.createElement('a');
        link.href = `https://en.wikipedia.org/?curid=${article.pageid}`;
        link.target = '_blank';
        link.textContent = 'Read more';
        articleDiv.appendChild(link);

        resultsDiv.appendChild(articleDiv);
    });
}
