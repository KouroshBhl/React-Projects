import React from 'react'
export default function (state, action) {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, loading: false, data: action.payloads, error: false }

    case 'CLICK_DETAIL': {
      return { loading: true }
    }
    case 'FAIL_DATA': {
      return { loading: true, error: true }
    }

    case 'SEARCH_COCKTAIL': {
      return { ...state, loading: false, cocktail: action.payloads.data.drinks }
    }
    case 'SEARCH_FORM': {
      const findResults = state.data.drinks.filter(
        (cocktail) =>
          cocktail.strDrink.toLowerCase().slice(0, action.payloads.length) ===
          action.payloads.toLowerCase()
      )
      // if (!findResults) return { ...state }
      return { ...state, search: findResults }
    }
    default:
      throw new Error('No action found!')
    // return state
  }
}
