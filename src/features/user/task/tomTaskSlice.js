import { createSlice } from '@reduxjs/toolkit'
import {
  getTomFromLocalStorage,
  removeTomAllTaskFromLocalStorage,
  setTomInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localTomTask: getTomFromLocalStorage() || [],
}

const tomTaskSlice = createSlice({
  name: 'tom',
  initialState,
  reducers: {
    getTomTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setTomValuesInStore: (state, { payload }) => {
      let stateLocalTomTask = state.localTomTask
      let localTask = [payload, ...stateLocalTomTask]
      state.localTomTask = localTask
      setTomInLocalStorage(state.localTomTask)
    },
    deleteTomTask: (state, { payload }) => {
      let newList = state.localTomTask.filter((item) => item.id !== payload)
      state.localTomTask = newList
      setTomInLocalStorage(state.localTomTask)
    },
    editTomTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localTomTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearTomTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localTomTask = []
      removeTomAllTaskFromLocalStorage()
    },
    tomOpenModal: (state) => {
      state.isModalOpen = true
    },
    tomCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getTomTaskValues,
  setTomValuesInStore,
  deleteTomTask,
  editTomTask,
  clearTomTask,
  removeAllTaskValues,
  tomOpenModal,
  tomCloseModal,
} = tomTaskSlice.actions

export default tomTaskSlice.reducer
