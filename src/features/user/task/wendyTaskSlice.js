import { createSlice } from '@reduxjs/toolkit'
import {
  getWendyFromLocalStorage,
  removeWendyAllTaskFromLocalStorage,
  setWendyInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localWendyTask: getWendyFromLocalStorage() || [],
}

const wendyTaskSlice = createSlice({
  name: 'wendy',
  initialState,
  reducers: {
    getWendyTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setWendyValuesInStore: (state, { payload }) => {
      let stateLocalWendyTask = state.localWendyTask
      let localTask = [payload, ...stateLocalWendyTask]
      state.localWendyTask = localTask
      setWendyInLocalStorage(state.localWendyTask)
    },
    deleteWendyTask: (state, { payload }) => {
      let newList = state.localWendyTask.filter((item) => item.id !== payload)
      state.localWendyTask = newList
      setWendyInLocalStorage(state.localWendyTask)
    },
    editWendyTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localWendyTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearWendyTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localWendyTask = []
      removeWendyAllTaskFromLocalStorage()
    },
    wendyOpenModal: (state) => {
      state.isModalOpen = true
    },
    wendyCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getWendyTaskValues,
  setWendyValuesInStore,
  deleteWendyTask,
  editWendyTask,
  clearWendyTask,
  removeAllTaskValues,
  wendyOpenModal,
  wendyCloseModal,
} = wendyTaskSlice.actions

export default wendyTaskSlice.reducer
