class MainView {
    constructor(container, form) {
        // static parameters, but it must be stored on the server yml parameters e.g.
        this.api = new ApiHandler('https://www.omdbapi.com', 'tt3896198', '8523cbb8');

        this.$container = $(container);
        this.outPut = this.$container.find('.card-columns');
        this.form = $(form);

        this.initEvents();
    }

    initEvents() {
        this.form.on('submit', (event) => {
            event.preventDefault();

            const findText = this.form.find('input[name=q]').val();

            this.api.getResultBy(findText, null, (res) => {
                let html = '';

                if (res.Response === 'True') {
                    $.each(res.Search, (key, item) => {
                        html += Render.getCard(item.Poster, findText, item.Year, item.imdbID, item.Type);
                    });

                    let count = res.totalResults/res.Search.length;

                    this.outPut.html(html);

                    // change to static paginator, because eto govno
                    this.outPut.after(Render.getPaginator(Math.ceil(count)));
                } else if (res.Response === 'False') {
                    this.outPut.html(res.Error);
                }
            });
        });

        $('.home-link').on('click', () => {
            this.outPut.html('home page');
        })
    }
}
