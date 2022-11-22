export default function (state, action) {
  if (action.type === 'CLEAR_ALL') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE_ITEM') {
    const removeItem = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: removeItem }
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((el) => {
      if (el.id === action.payload.id) {
        return { ...el, amount: action.payload.amount + 1 }
      }
      return el
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, amount: action.payload.amount - 1 }
        }
        return el
      })
      .filter((item) => item.amount !== 0)
    return { ...state, cart: tempCart }
  }
  if (action.type === 'UPDATE_TOTAL') {
    let { amount, total } = state.cart.reduce(
      (accu, cartItem) => {
        const totalItem = cartItem.price * cartItem.amount
        accu.amount += cartItem.amount
        accu.total += totalItem
        return accu
      },
      {
        amount: 0,
        total: 0,
      }
    )

    total = parseFloat(total.toFixed(2))

    return { ...state, amount, total }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'FETCH_DATA') {
    return { ...state, loading: false, cart: action.payload }
  }
  return state

  // throw new Error('No Matching type!!!!!!!!!')
}
