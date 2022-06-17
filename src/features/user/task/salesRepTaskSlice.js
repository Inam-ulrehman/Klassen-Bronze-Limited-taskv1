import { createSlice } from '@reduxjs/toolkit'
import {
  getSalesRepFromLocalStorage,
  removeSalesRepAllTaskFromLocalStorage,
  setSalesRepInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localSalesRepTask: getSalesRepFromLocalStorage() || [],
}

const salesRepTaskSlice = createSlice({
  name: 'salesRep',
  initialState,
  reducers: {
    getSalesRepTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setSalesRepValuesInStore: (state, { payload }) => {
      let stateLocalSalesRepTask = state.localSalesRepTask
      let localTask = [payload, ...stateLocalSalesRepTask]
      state.localSalesRepTask = localTask
      setSalesRepInLocalStorage(state.localSalesRepTask)
    },
    deleteSalesRepTask: (state, { payload }) => {
      let newList = state.localSalesRepTask.filter(
        (item) => item.id !== payload
      )
      state.localSalesRepTask = newList
      setSalesRepInLocalStorage(state.localSalesRepTask)
    },
    editSalesRepTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localSalesRepTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearSalesRepTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localSalesRepTask = []
      removeSalesRepAllTaskFromLocalStorage()
    },
    salesRepOpenModal: (state) => {
      state.isModalOpen = true
    },
    salesRepCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getSalesRepTaskValues,
  setSalesRepValuesInStore,
  deleteSalesRepTask,
  editSalesRepTask,
  clearSalesRepTask,
  removeAllTaskValues,
  salesRepOpenModal,
  salesRepCloseModal,
} = salesRepTaskSlice.actions

export default salesRepTaskSlice.reducer
