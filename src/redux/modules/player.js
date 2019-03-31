import reducer from '../reducer'
import { sendSelectedPlayers } from '../../services/PlayersService'

export const SELECT_PLAYER = 'player/select'
export const REMOVE_PLAYER = 'player/remove'
export const CREATE_USER_REQUEST = 'user/request/create'
const FAV_PLAYER_REQUEST = 'fav_player/request/save'
const FAV_PLAYER_SUCCESS = 'fav_player/success/save'
const FAV_PLAYER_FAILURE = 'fav_player/failure/save'


export const sendPlayers = () => (dispatch, getState) => {
    const { game: { gameId }, player: { selected } } = getState()

    dispatch({ type: FAV_PLAYER_REQUEST })
    return sendSelectedPlayers(gameId, selected)
      .then(() => dispatch({ type: FAV_PLAYER_SUCCESS }))
      .catch(e => dispatch({ type: FAV_PLAYER_FAILURE, payload: e.message }))
}


export const toggleSelect = (player) => (dispatch, getState) => {
  const { player: { selected } } = getState()
  const index = selected.indexOf(player)
  const shouldRemove = index >= 0

  if (shouldRemove) dispatch({ type: REMOVE_PLAYER, payload: index })
  else if (selected.length < 3) dispatch({ type: SELECT_PLAYER, payload: player })

  if (!shouldRemove && selected.length >= 2) dispatch(sendPlayers())
}

const handlers = {
  [SELECT_PLAYER]: (state, player) => ({
    ...state,
    selected: [...state.selected, player],
  }),
  [REMOVE_PLAYER]: (state, index) => ({
    ...state,
    selected: [...state.selected.slice(0, index), ...state.selected.slice(index + 1)],
  }),
  [FAV_PLAYER_REQUEST]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FAV_PLAYER_SUCCESS]: (state) => ({
    ...state,
    confirmed: true,
    loading: false,
    error: null,
  }),
  [FAV_PLAYER_FAILURE]: (state, error) => ({
    ...state,
    confirmed: false,
    loading: false,
    error,
  })
}

const initialState = {
  selected: [],
  confirmed: false,
  loading: false,
  error: null
}

export default reducer(handlers, initialState);
