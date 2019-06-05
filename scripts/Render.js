class Render {
    static getCard(srcToImg, name, year, imdbID, type) {
        return `
        <div class="card p3">
            <img src="${srcToImg}" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title">Name: ${name}</h5>
                <p class="card-text">Year: ${year}</p>
                <p class="card-text">imdbID: ${imdbID}</p>
                <p class="card-text">Type: ${type}</p>
            </div>
        </div>
        `;
    }

    static getPaginator(countTabs) {
        let html = '';

        for (let i = 1; i <= countTabs; i++) {
            html += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
        }

        return `
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    ${html}
                </ul>
            </nav>
        `;
    }
}
