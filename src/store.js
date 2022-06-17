import { configureStore } from '@reduxjs/toolkit'
import jeffTaskSlice from './features/user/task/jeffTaskSlice'
import WendyTaskSlice from './features/user/task/wendyTaskSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    jeff: jeffTaskSlice,
    wendy: WendyTaskSlice,
  },
})

export default store
