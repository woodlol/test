class ApiHandler {
    constructor(url, $i, $apikey) {
        this.url = `${url}/?i=${$i}&apikey=${$apikey}`;
    }

    getResultBy(s = null, page = 1, callback) {
        let params = s ? `&s=${s}` : '';
            params += s ? `&page=${page}` : '';

        $.ajax(this.url + params).done((res) => {
            callback(res);
        });
    }
}
