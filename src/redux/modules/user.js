export const CREATE_USER_REQUEST = 'user/request/create'
export const CREATE_USER_SUCCESS = 'user/success/create'
export const CREATE_USER_FAILURE = 'user/failure/create'

const createUserRequest = () => ({ type: CREATE_USER_REQUEST })
const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, payload: user })
const createUserFailure = (errors) => ({ type: CREATE_USER_FAILURE, payload: { errors } })

export const save = (name) => (dispatch, getState) => {
  if (!name) return
  dispatch(createUserRequest())
  setTimeout(() => dispatch(createUserSuccess({ name, id: 1 })), 1200)
}

const handlers = {
  [CREATE_USER_REQUEST]: (state) => ({
    ...state,
    loading: true,
    errors: [],
    hasError: false,
  }),
  [CREATE_USER_SUCCESS]: (state, user) => ({
    ...state,
    ...user,
    loading: false,
    errors: [],
    hasError: false,
  }),
  [CREATE_USER_FAILURE]: (state, errors) => ({
    ...state,
    loading: false,
    hasError: true,
    errors
  })
}

const initialState = {
  name: '',
  id: '',
  loading: false,
  errors: [],
  hasError: false,
}

const reducer = (state = initialState, action) => {
  const handler = action.type ? handlers[action.type] : null

  if (!handler) return state
  return handler(state, action.payload)
}

export default reducer;
