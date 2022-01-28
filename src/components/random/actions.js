export const randomGif = () => {
  return {
      type: "GET_RANDOM_GIF",
  }
}

export const clearRandomGif = () => {
  return {
    type: "CLEAR_RANDOM_GIF",
  }
}
