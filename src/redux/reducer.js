export default (handlers, initialState) => (state = initialState, action) => {
  const handler = action.type ? handlers[action.type] : null

  if (!handler) return state
  const res = handler(state, action.payload)

  return res
}
