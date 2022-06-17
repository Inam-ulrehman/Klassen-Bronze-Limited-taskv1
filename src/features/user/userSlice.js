import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils.js/localStorage'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoading: false,
  isMember: true,
  isLogin: false,
  isLoginToggle: false,
  isMenuOpen: false,
  isTaskOpen: false,
  storeUser: getUserFromLocalStorage() || null,
}

// register user
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return user
  }
)
// login user
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return user
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleFormValue: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    handleFormToggleButton: (state) => {
      state.isMember = !state.isMember
    },
    navigateUser: (state) => {
      console.log('hello navigate ')
    },
    toggleSideMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    toggleTaskBar: (state) => {
      state.isTaskOpen = !state.isTaskOpen
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {},
    [registerUser.fulfilled]: (state, { payload }) => {
      toast.success(`Hello There ${payload.name}`)

      setUserInLocalStorage(payload)
    },
    [registerUser.rejected]: (state) => {},
    [loginUser.pending]: (state) => {},
    [loginUser.fulfilled]: (state, { payload }) => {
      const user = getUserFromLocalStorage()
      if (user.password === payload.password) {
        toast.info(`welcome back ${payload.name}`)
        state.isLogin = true
        state.isLoginToggle = !state.isLoginToggle
        return
      }
      return toast.error(`Invalid Credential.`)
    },
    [loginUser.rejected]: (state) => {},
  },
})
export const {
  handleFormValue,
  handleFormToggleButton,
  navigateUser,
  toggleSideMenu,
  toggleTaskBar,
} = userSlice.actions
export default userSlice.reducer
