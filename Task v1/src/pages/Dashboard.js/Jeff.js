import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  clearJeffTask,
  deleteJeffTask,
  editJeffTask,
  getJeffTaskValues,
  jeffCloseModal,
  jeffOpenModal,
  removeAllTaskValues,
  setJeffValuesInStore,
} from '../../features/user/task/jeffTaskSlice'

const Jeff = () => {
  const dispatch = useDispatch()
  const {
    task,
    type,
    typeOptions,
    localJeffTask,
    editId,
    isEditing,
    isModalOpen,
  } = useSelector((state) => state.jeff)

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task || !type) {
      return toast.info('Please add some text...', {
        position: 'top-center',
      })
    }
    if (isEditing) {
      console.log('editing is true')
      dispatch(deleteJeffTask(editId))
      const id = new Date().getTime()
      dispatch(setJeffValuesInStore({ task, id, type }))
      dispatch(clearJeffTask())

      return
    }
    const id = new Date().getTime()
    dispatch(setJeffValuesInStore({ task, id, type }))
    dispatch(clearJeffTask())
    return
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getJeffTaskValues({ name, value }))
  }

  // handle delete
  const handleDelete = (id) => {
    dispatch(deleteJeffTask(id))
  }

  // handle edit
  const handleEdit = (id) => {
    dispatch(editJeffTask(id))
  }
  // handle removeAllTask
  const handleRemoveAllTask = () => {
    // dispatch(removeAllTaskValues())
    dispatch(jeffOpenModal())
  }
  return (
    <div>
      {isModalOpen && (
        <div className='modal-container'>
          <div className='modal'>
            <p>Are you sure you want to delete all task ?</p>
            <div>
              <button
                onClick={() => {
                  dispatch(removeAllTaskValues())
                  dispatch(jeffCloseModal())
                }}
                type='button'
                className='btn alert-danger'
              >
                yes
              </button>
              <button
                onClick={() => {
                  dispatch(jeffCloseModal())
                }}
                type='button'
                className='btn alert-success'
              >
                no
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>{isEditing ? 'Editing Task' : 'Add Task'}</h3>
        <div className='title-underline'></div>
        <div>
          <label htmlFor='name' className='form-label'>
            Task
          </label>
          <textarea
            type='text'
            name='task'
            id='task'
            value={task}
            onChange={handleChange}
            className='form-textarea'
          />
        </div>
        <div>
          <label htmlFor='type' className='form-label'>
            type
          </label>
          <select
            name='type'
            id='type'
            value={type}
            onChange={handleChange}
            className='form-select'
          >
            {typeOptions.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          Submit Task
        </button>
      </form>
      <hr />
      {localJeffTask.length > 0 && (
        <p className='title'>
          <button
            className='btn alert-danger'
            type='button '
            onClick={handleRemoveAllTask}
          >
            Remove all task
          </button>
        </p>
      )}

      <div className='task-container'>
        <div className='single-task'>
          {localJeffTask.length > 0 &&
            localJeffTask.map((item) => {
              const { id, task, type } = item
              return (
                <article key={id}>
                  <h3>task:{task}</h3>
                  <p>created at : {moment(id).format('MMM Do YY')}</p>
                  <p>Type is :{type}</p>
                  <button
                    onClick={() => handleEdit(id)}
                    type='button'
                    className='btn '
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(id)
                    }}
                    type='button'
                    className='btn alert-danger'
                  >
                    Delete
                  </button>
                </article>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Jeff
