export const getGifs = () => {
    return {
        type: "GET_GIFS",
    }
}

export const submitSearch = (data) => {
    console.log('action', data)
    return {
        type: "SEARCH_GIFS",
        data,
    }
}