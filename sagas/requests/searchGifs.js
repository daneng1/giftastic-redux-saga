
const searchGifs = (data) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Eez8YyeMjt1lelM8ivg7c8fiSkl5sSyf&q=${data}&limit=50&rating=r`;
    return fetch(url, {
        method: "GET",
    })
    .then(response => response.json()
    .catch(error => {throw error}))

}

export default searchGifs;
