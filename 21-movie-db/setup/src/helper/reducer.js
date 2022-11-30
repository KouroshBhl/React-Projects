export const reducer = function (state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'FETCH_DATA':
      if (action.payload.data.Response === 'False')
        return { ...state, movies: [], found: false }

      return {
        ...state,
        loading: false,
        movies: action.payload?.data?.Search,
        found: true,
      }

    case 'SEARCH_ID':
      return {
        ...state,
        loading: false,
        movies: action.payload?.data,
        found: true,
      }

    case 'SEARCH_DATA':
      return {
        ...state,
        loading: false,
        movies: action.payload?.data,
        found: true,
      }

    default:
      return state
  }
}

export const initalState = {
  loading: false,
  movies: [],
  found: true,
}
