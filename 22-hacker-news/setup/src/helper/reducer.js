const reducer = function (state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'GET_NEWS':
      return {
        ...state,
        loading: false,
        news: action.payload.data.hits,
        totalPages: action.payload.data.nbPages,
        page: action.payload.data.page,
        results: action.payload.data.nbHits,
      }

    case 'SEARCH_QUERY':
      return { ...state, search: action.payload }

    case 'REMOVE_NEW':
      const removeItem = state.news.filter(
        (el) => el.objectID !== action.payload
      )

      return { ...state, news: removeItem }

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
