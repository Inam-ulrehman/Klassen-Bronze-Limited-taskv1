import { configureStore } from '@reduxjs/toolkit'
import jeffTaskSlice from './features/user/task/jeffTaskSlice'
import salesRepTaskSlice from './features/user/task/salesRepTaskSlice'
import tomTaskSlice from './features/user/task/tomTaskSlice'
import WendyTaskSlice from './features/user/task/wendyTaskSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    jeff: jeffTaskSlice,
    wendy: WendyTaskSlice,
    tom: tomTaskSlice,
    salesRep: salesRepTaskSlice,
  },
})

export default store
