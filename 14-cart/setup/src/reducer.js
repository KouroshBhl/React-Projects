export default function (state, action) {
  if (action.type === 'CLEAR_ALL') {
    return { ...state, cart: [] }
    // return [...state, action.payload]
  }
  if (action.type === 'REMOVE_ITEM') {
    const removeItem = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: removeItem }

    console.log(removeItem)
  }

  return state

  // throw new Error('No Matching type!!!!!!!!!')
}
