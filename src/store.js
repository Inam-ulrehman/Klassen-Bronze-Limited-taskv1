import { configureStore } from '@reduxjs/toolkit'
import jeffTaskSlice from './features/user/task/jeffTaskSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    jeff: jeffTaskSlice,
  },
})

export default store
