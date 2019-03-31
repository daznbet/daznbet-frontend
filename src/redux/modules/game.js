import { getPlayers as servicePlayers } from '../../services/PlayersService'
import reducer from '../reducer'

export const GET_GAME_REQUEST = 'player/request/getPlayers'
export const GET_GAME_SUCCESS = 'player/success/getPlayers'
export const GET_GAME_FAILURE = 'player/failure/getPlayers'

const getGameRequest = () => ({ type: GET_GAME_REQUEST })
const getGameSuccess = (players) => ({ type: GET_GAME_SUCCESS, payload: players })
const getGameFailure = (error) => ({ type: GET_GAME_FAILURE, payload: error })

export const getGameInfo = () => (dispatch, getState) => {
  dispatch(getGameRequest())
  return servicePlayers()
    .then(players => dispatch(getGameSuccess(players)))
    .catch(error => dispatch(getGameFailure(error.message)))
}

const handlers = {
  [GET_GAME_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true
  }),
  [GET_GAME_SUCCESS]: (state, playersByTeam) => ({
    ...state,
    gameId: playersByTeam.gameId,
    teams: playersByTeam.teams,
    error: null,
    loading: false
  }),
  [GET_GAME_FAILURE]: (state, error) => ({
    ...state,
    teams: [],
    loading: false,
    error
  }),
}

const initialState = {
  gameId: 0,
  teams: [],
  loading: false,
  error: null,
}

export default reducer(handlers, initialState);
