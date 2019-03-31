import { create as serviceCreate } from '../../services/UserService'
import reducer from '../reducer'

const SELECT = 'player/select'
const REMOVE = 'player/remove'

const handlers = {
  [SELECT]: (state, player) => {
    ...state,
    selected: [...state.selected, player],
  },
  [REMOVE]: (state, index) => {
    ...state,
    selected: [...state.selected.slice(0, index), ...state.slice(index + 1)],
  }
}

const initialState = {
  confirmed: [],
  selected: [],
  loading: false,
  error: null,
}

export default reducer(handlers, initialState);
