
const searchGifs = (input) => {
    console.log('input', input);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Eez8YyeMjt1lelM8ivg7c8fiSkl5sSyf&q=${input.data}&limit=50&rating=r`;
    console.log(url);
    return fetch(url, {
        method: "GET",
    })
    .then(response => response.json()
    .catch(error => {throw error}))

}

export default searchGifs;
