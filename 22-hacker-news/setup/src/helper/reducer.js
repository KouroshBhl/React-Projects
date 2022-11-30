const reducer = function (state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'GET_NEWS':
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        news: action.payload,
        totalPages: action.payload.data.nbPages,
        page: action.payload.data.page,
        results: action.payload.data.nbHits,
      }

    case 'SEARCH_QUERY':
      return { ...state, search: action.payload }

    default:
      return state
  }
}

const initalState = {
  loading: true,
  news: [],
  page: 0,
  totalPages: 1,
  search: 'React',
  results: 0,
}
export { initalState, reducer }
