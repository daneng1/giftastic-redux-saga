

const url = "https://api.giphy.com/v1/gifs/trending?api_key=Eez8YyeMjt1lelM8ivg7c8fiSkl5sSyf&limit=100&rating=r";

const getGifs = () => {
    return fetch(url, {
        method: "GET",
    })
    .then(response => response.json()
    .catch(error => {throw error}))

}

export default getGifs;
