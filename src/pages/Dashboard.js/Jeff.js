import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
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
    name,
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
    if (!name || !task || !type) {
      return toast.info('Please add some text...', {
        position: 'top-center',
      })
    }
    if (isEditing) {
      console.log('editing is true')
      dispatch(deleteJeffTask(editId))
      const id = new Date().getTime()
      dispatch(setJeffValuesInStore({ task, id, type, name }))
      dispatch(clearJeffTask())

      return
    }
    const id = new Date().getTime()
    dispatch(setJeffValuesInStore({ task, id, type, name }))
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
    <Wrapper>
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
        <h3 className='title title-h3'>
          {isEditing ? 'Editing Task' : 'Add Task'}
        </h3>
        <div className='title-underline'></div>
        <div>
          {/* name Input */}
          <label htmlFor='name' className='form-label'>
            Task Name
          </label>

          <input
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleChange}
          />

          {/* task Input */}
          <label htmlFor='task' className='form-label'>
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
        {/* type input */}
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
        <div className='cards-holder'>
          {localJeffTask.length > 0 &&
            localJeffTask.map((item) => {
              const { id, task, type, name } = item
              console.log(name)
              return (
                <article className='single-card' key={id}>
                  <div className='informationHandler'>
                    <div className='header'>
                      <h3 className='title '>{name}</h3>
                      <div className='title-underline'></div>
                    </div>
                    <div className='body'>
                      <p className='body-task'>{task}</p>
                    </div>
                    <div className='footer'>
                      <p>Created at : {moment(id).format('MMM Do YY')}</p>
                      <p className={type}> {type}</p>
                    </div>
                  </div>
                  <div className='btnHandler'>
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
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .form {
    @media (max-width: 678px) {
      height: 300px;
      margin-top: 0px;
    }
    .title-h3 {
      @media (max-width: 678px) {
        margin-top: -35px;
      }
    }
    .form-textarea {
      @media (max-width: 678px) {
        height: 40px;
      }
    }
  }
  .cards-holder {
    @media (min-width: 678px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      max-width: var(--fixed-width);
      gap: 1rem;
    }
  }
  .single-card {
    background-color: var(--white);
    transition: var(--transition);
    box-shadow: var(--shadow-2);
    border-radius: var(--radius);
    width: 300px;

    @media (max-width: 678px) {
      width: 300px;
      margin: 1rem auto;
      padding: 5px;
    }

    :hover {
      transition: var(--transition);
      box-shadow: var(--shadow-4);
    }
  }
  .body {
    max-width: 300px;
    max-height: 150px;
    overflow: scroll;
    padding: 1rem;
    p {
      word-wrap: break-word;
    }
  }

  .footer {
    text-align: center;
    p {
      margin: 0 auto;
    }
  }
  .btnHandler {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .Less-Important {
    background-color: var(--green-light);
  }
  .Important {
    background-color: var(--red-light);
  }
  .Very-Important {
    background-color: var(--red-dark);

    color: white;
  }
`
export default Jeff
