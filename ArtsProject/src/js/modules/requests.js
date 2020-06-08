async function postData(url, data) {
    let request = await fetch(`${url}`, {
        method: 'POST',
        body: data,
    });
    return await request.text();
}
async function getResourse(url) {
    let request = await fetch(`${url}`);
    if (!request.ok) {
        throw new Error(`Ошибка в ${request.url} имеет статус ${request.status}`);
    }
    return await request.json();
}
export {
    postData,
    getResourse
};