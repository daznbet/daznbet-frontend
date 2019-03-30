import { create as serviceCreate } from '../../services/UserService'

export const CREATE_USER_REQUEST = 'user/request/create'
export const CREATE_USER_SUCCESS = 'user/success/create'
export const CREATE_USER_FAILURE = 'user/failure/create'
export const CLEAR = 'user/clear'

const createUserRequest = () => ({ type: CREATE_USER_REQUEST })
const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, payload: user })
const createUserFailure = (error) => ({ type: CREATE_USER_FAILURE, payload: error })

export const clear = () => ({ type: CLEAR })

export const create = (name) => (dispatch, getState) => {
  if (!name) return
  dispatch(createUserRequest())
  return serviceCreate(name)
    .then(user => dispatch(createUserSuccess(user)))
    .catch(error => dispatch(createUserFailure(error.message)))
}

const handlers = {
  [CREATE_USER_REQUEST]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [CREATE_USER_SUCCESS]: (state, user) => ({
    ...state,
    ...user,
    loading: false,
    error: null,
  }),
  [CREATE_USER_FAILURE]: (state, error) => ({
    ...state,
    loading: false,
    error
  }),
  [CLEAR]: (state, error) => ({
    ...state,
    loading: false,
    error: null,
  })

}

const initialState = {
  id: '',
  loading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  const handler = action.type ? handlers[action.type] : null

  if (!handler) return state
  return handler(state, action.payload)
}

export default reducer;
