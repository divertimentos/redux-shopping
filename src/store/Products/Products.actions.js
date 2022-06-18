export default function(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

export function toggleProduct(id) {
  return {
    type: 'TOGGLE_PRODUCT',
    payload: id
  }
}
