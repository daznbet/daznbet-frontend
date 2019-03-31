import { getPlayers as servicePlayers } from '../../services/PlayersService'
import reducer from '../reducer'

export const GET_PLAYERS_REQUEST = 'player/request/getPlayers'
export const GET_PLAYERS_SUCCESS = 'player/success/getPlayers'
export const GET_PLAYERS_FAILURE = 'player/failure/getPlayers'

const getPlayersRequest = () => ({ type: GET_PLAYERS_REQUEST })
const getPlayersSuccess = (players) => ({ type: GET_PLAYERS_SUCCESS, payload: players })
const getPlayersFailure = (error) => ({ type: GET_PLAYERS_FAILURE, payload: error })

export const getPlayers = () => (dispatch, getState) => {
  dispatch(getPlayersRequest())
  return servicePlayers()
    .then(players => dispatch(getPlayersSuccess(players)))
    .catch(error => dispatch(getPlayersFailure(error.message)))
}

const handlers = {
  [GET_PLAYERS_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true
  }),
  [GET_PLAYERS_SUCCESS]: (state, playersByTeam) => ({
    ...state,
    gameId: playersByTeam.gameId,
    teams: playersByTeam.teams
  }),
}

const initialState = {
  gameId: 0,
  teams: [],
  confirmed: [],
  selected: [],
  loading: false,
  error: null,
}

export default reducer(handlers, initialState);
