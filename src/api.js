/**
 * Pobiera z serwisu unsplash.com listę z informacjami o obrazkach, które spełniają podaną frazę
 * @param {string} term Fraza, wg której, będą szukane obrazki
 * @returns {Promise<Array>}
 */
export const searchImages = (term) => {
    const url = new URL('https://api.unsplash.com/search/photos');
    const params = {query:term};
    url.search = new URLSearchParams(params).toString();
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID VO3swjtPffFcLVoU_mMT3r1fc1j2cq3Jm98HrOWq0v4'
        }
    }).then(response => response.json().then(response => response.results));
}
