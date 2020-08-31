
export class APIResult {
    constructor(status, statusText, msg, data) {
        this.status = status;
        this.statusText = statusText;
        this.msg = msg;
        this.data = data;
    }
}

export class BaseAPIService {
    get api_url() {
        return "http://localhost:5000"
    }

    async get(uri) {
        const response = await fetch(this.api_url + uri, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            mode: 'cors'
        });

        const result = await response.json();
        return new APIResult(response.status, response.statusText, result.msg, result.data);
    }

    async post(uri, data) {
        const response = await fetch(this.api_url + uri, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });

        const result = await response.json();
        return new APIResult(response.status, response.statusText, result.msg, result.data);
    }

    async patch(uri, data) {
        const response = await fetch(this.api_url + uri, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });

        const result = await response.json();
        return new APIResult(response.status, response.statusText, result.msg, result.data);
    }
}