import { createSlice } from '@reduxjs/toolkit'
import {
  getOfficeFromLocalStorage,
  removeOfficeAllTaskFromLocalStorage,
  setOfficeInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localOfficeTask: getOfficeFromLocalStorage() || [],
}

const officeTaskSlice = createSlice({
  name: 'office',
  initialState,
  reducers: {
    getOfficeTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setOfficeValuesInStore: (state, { payload }) => {
      let stateLocalOfficeTask = state.localOfficeTask
      let localTask = [payload, ...stateLocalOfficeTask]
      state.localOfficeTask = localTask
      setOfficeInLocalStorage(state.localOfficeTask)
    },
    deleteOfficeTask: (state, { payload }) => {
      let newList = state.localOfficeTask.filter((item) => item.id !== payload)
      state.localOfficeTask = newList
      setOfficeInLocalStorage(state.localOfficeTask)
    },
    editOfficeTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localOfficeTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearOfficeTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localOfficeTask = []
      removeOfficeAllTaskFromLocalStorage()
    },
    officeOpenModal: (state) => {
      state.isModalOpen = true
    },
    officeCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getOfficeTaskValues,
  setOfficeValuesInStore,
  deleteOfficeTask,
  editOfficeTask,
  clearOfficeTask,
  removeAllTaskValues,
  officeOpenModal,
  officeCloseModal,
} = officeTaskSlice.actions

export default officeTaskSlice.reducer
