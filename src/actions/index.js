export const getGifs = () => {
    return {
        type: "GET_GIFS",
    }
}

export const submitSearch = (data) => {
    return {
        type: "SEARCH_GIFS",
        data,
    }
}
