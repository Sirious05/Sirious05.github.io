export default class PostRequest {
    constructor(data, url) {
        try {
            this.data = data;
            this.url = `${url}`;
        } catch (e) {}
    }
    async init() {
        const request = await fetch(`${this.url}`, {
            method: 'POST',
            body: this.data,
        });
        if (!request.ok) {
            throw new Error(`Ошибка в ${request.url} имеет статус ${request.status}`);
        }
        return await request.text();
    }
    async render() {
        try {
            return await this.init();
        } catch (e) {}
    }
}