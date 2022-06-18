import { createSlice } from '@reduxjs/toolkit'
import {
  getJeffFromLocalStorage,
  removeJeffAllTaskFromLocalStorage,
  setJeffInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localJeffTask: getJeffFromLocalStorage() || [],
}

const jeffTaskSlice = createSlice({
  name: 'jeff',
  initialState,
  reducers: {
    getJeffTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setJeffValuesInStore: (state, { payload }) => {
      let stateLocalJeffTask = state.localJeffTask
      let localTask = [payload, ...stateLocalJeffTask]
      state.localJeffTask = localTask
      setJeffInLocalStorage(state.localJeffTask)
    },
    deleteJeffTask: (state, { payload }) => {
      let newList = state.localJeffTask.filter((item) => item.id !== payload)
      state.localJeffTask = newList
      setJeffInLocalStorage(state.localJeffTask)
    },
    editJeffTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localJeffTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearJeffTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localJeffTask = []
      removeJeffAllTaskFromLocalStorage()
    },
    jeffOpenModal: (state) => {
      state.isModalOpen = true
    },
    jeffCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getJeffTaskValues,
  setJeffValuesInStore,
  deleteJeffTask,
  editJeffTask,
  clearJeffTask,
  removeAllTaskValues,
  jeffOpenModal,
  jeffCloseModal,
} = jeffTaskSlice.actions

export default jeffTaskSlice.reducer
