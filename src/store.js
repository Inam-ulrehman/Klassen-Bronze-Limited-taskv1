import { configureStore } from '@reduxjs/toolkit'
import agentsTaskSlice from './features/user/task/agentsTaskSlice'
import jeffTaskSlice from './features/user/task/jeffTaskSlice'
import officeTaskSlice from './features/user/task/officeTaskSlice'
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
    office: officeTaskSlice,
    agents: agentsTaskSlice,
  },
})

export default store
