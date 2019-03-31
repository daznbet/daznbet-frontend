import reducer from '../reducer'

const SELECT_PLAYER = 'player/select'
const REMOVE_PLAYER = 'player/remove'

export const toggleSelect = (player) => (dispatch, getState) => {
  console.log(getState())
  const { player: { selected } } = getState()
  const index = selected.indexOf(player)

  if (index >= 0) dispatch({ type: REMOVE_PLAYER, payload: index })
  else if (selected.length >= 3) return
  else dispatch({ type: SELECT_PLAYER, payload: player })
}

const handlers = {
  [SELECT_PLAYER]: (state, player) => ({
    ...state,
    selected: [...state.selected, player],
  }),
  [REMOVE_PLAYER]: (state, index) => ({
    ...state,
    selected: [...state.selected.slice(0, index), ...state.selected.slice(index + 1)],
  })
}

const initialState = {
  selected: []
}

export default reducer(handlers, initialState);
