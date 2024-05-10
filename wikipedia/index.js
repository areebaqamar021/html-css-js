async function searchArticles() {
    const searchTerm = document.getElementById("searchInput").value;
    if (searchTerm.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArticles(data.query.search);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayArticles(articles) {
    const articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = "";

    articles.forEach(article => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const title = document.createElement("h2");
        title.innerHTML = article.title;

        const snippet = document.createElement("p");
        snippet.innerHTML = article.snippet;

        const link = document.createElement("a");
        link.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`;
        link.textContent = "Read more";
        link.target = "_blank"; // Open link in a new tab

        articleDiv.appendChild(title);
        articleDiv.appendChild(snippet);
        articleDiv.appendChild(link);

        articlesContainer.appendChild(articleDiv);
    });
}

