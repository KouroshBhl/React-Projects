export const reducer = function (state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: false, movies: action.payload?.data?.Search }

    case 'SEARCH_ID':
      // console.log(action.payload)
      return { ...state, loading: false, movies: action.payload?.data }

    case 'SEARCH_DATA':
      return { ...state, loading: false, movie: action.payload?.data }

    default:
      return state
  }
}

export const initalState = {
  loading: true,
  movies: [],
}
