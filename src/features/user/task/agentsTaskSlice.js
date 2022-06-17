import { createSlice } from '@reduxjs/toolkit'
import {
  getAgentsFromLocalStorage,
  removeAgentsAllTaskFromLocalStorage,
  setAgentsInLocalStorage,
} from '../../../utils.js/localStorage'

const initialState = {
  name: '',
  task: '',
  isModalOpen: false,
  type: '',
  typeOptions: ['Options', 'Less-Important', 'Important', 'Very-Important'],
  editId: '',
  isEditing: false,
  localAgentsTask: getAgentsFromLocalStorage() || [],
}

const agentsTaskSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    getAgentsTaskValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    setAgentsValuesInStore: (state, { payload }) => {
      let stateLocalAgentsTask = state.localAgentsTask
      let localTask = [payload, ...stateLocalAgentsTask]
      state.localAgentsTask = localTask
      setAgentsInLocalStorage(state.localAgentsTask)
    },
    deleteAgentsTask: (state, { payload }) => {
      let newList = state.localAgentsTask.filter((item) => item.id !== payload)
      state.localAgentsTask = newList
      setAgentsInLocalStorage(state.localAgentsTask)
    },
    editAgentsTask: (state, { payload }) => {
      console.log(payload)
      let newList = state.localAgentsTask.find((item) => item.id === payload)
      state.name = newList.name
      state.task = newList.task
      state.editId = newList.id
      state.isEditing = true
    },
    clearAgentsTask: (state) => {
      state.name = ''
      state.task = ''
      state.isEditing = false
    },
    removeAllTaskValues: (state) => {
      state.localAgentsTask = []
      removeAgentsAllTaskFromLocalStorage()
    },
    agentsOpenModal: (state) => {
      state.isModalOpen = true
    },
    agentsCloseModal: (state) => {
      state.isModalOpen = false
    },
  },
})
export const {
  getAgentsTaskValues,
  setAgentsValuesInStore,
  deleteAgentsTask,
  editAgentsTask,
  clearAgentsTask,
  removeAllTaskValues,
  agentsOpenModal,
  agentsCloseModal,
} = agentsTaskSlice.actions

export default agentsTaskSlice.reducer
