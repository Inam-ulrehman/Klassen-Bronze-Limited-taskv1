import React, { useEffect } from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import {
  clearAgentsTask,
  deleteAgentsTask,
  editAgentsTask,
  getAgentsTaskValues,
  agentsCloseModal,
  agentsOpenModal,
  removeAllTaskValues,
  setAgentsValuesInStore,
} from '../../features/user/task/agentsTaskSlice'
import { toggleTaskBar } from '../../features/user/userSlice'

const Agents = () => {
  const dispatch = useDispatch()
  const {
    name,
    task,
    type,
    typeOptions,
    localAgentsTask,
    editId,
    isEditing,
    isModalOpen,
  } = useSelector((state) => state.agents)
  const { isTaskOpen } = useSelector((state) => state.user)

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !task || !type) {
      return toast.info('Please fill in all the fields...', {
        position: 'top-center',
      })
    }
    if (isEditing) {
      console.log('editing is true')
      dispatch(deleteAgentsTask(editId))
      const id = new Date().getTime()
      dispatch(setAgentsValuesInStore({ task, id, type, name }))
      dispatch(clearAgentsTask())

      return
    }
    const id = new Date().getTime()
    dispatch(setAgentsValuesInStore({ task, id, type, name }))
    dispatch(clearAgentsTask())
    return
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getAgentsTaskValues({ name, value }))
  }

  // handle delete
  const handleDelete = (id) => {
    dispatch(deleteAgentsTask(id))
    toast.info('Task deleted...')
  }

  // handle edit
  const handleEdit = (id) => {
    dispatch(editAgentsTask(id))
    dispatch(toggleTaskBar())
  }
  // handle removeAllTask
  const handleRemoveAllTask = () => {
    // dispatch(removeAllTaskValues())
    dispatch(agentsOpenModal())
  }

  // handle taskBar toggle
  // const handleTaskBarToggle = () => {
  //   dispatch(toggleTaskBar())
  // }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [isTaskOpen])
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
                  dispatch(agentsCloseModal())
                }}
                type='button'
                className='btn btn-modal-yes alert-danger'
              >
                yes
              </button>
              <button
                onClick={() => {
                  dispatch(agentsCloseModal())
                }}
                type='button'
                className='btn btn-modal-no alert-success'
              >
                no
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task bar form */}

      {isTaskOpen && (
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
      )}

      <h5 className='title'>Task given by Agents</h5>
      <div className='title-underline'></div>
      <hr />
      {localAgentsTask.length > 0 && (
        <div className='title'>
          <button
            className='btn btn-remove-all  alert-danger'
            type='button '
            onClick={handleRemoveAllTask}
          >
            Remove all task
          </button>
        </div>
      )}

      {localAgentsTask.length < 1 && (
        <div>
          <p
            className='title'
            style={{
              backgroundColor: 'green',
              color: 'white',
              margin: '0 auto',
            }}
          >
            Good job !!! there isn't any pending task....
          </p>
        </div>
      )}
      {/* Cart containers... */}

      <div className='task-container'>
        <div className='cards-holder'>
          {localAgentsTask.length > 0 &&
            localAgentsTask.map((item) => {
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
                      onClick={() => {
                        handleEdit(id)
                      }}
                      type='button'
                      className='btn btn-edit alert-success '
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(id)
                      }}
                      type='button'
                      className='btn btn-delete alert-danger'
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
  .btn-remove-all {
    margin-bottom: 1rem;
    :hover {
      color: var(--white);
      background-color: var(--red-dark);
    }
  }
  .btn-delete {
    :hover {
      color: var(--white);
      background-color: var(--red-dark);
    }
  }
  .btn-edit {
    :hover {
      color: var(--white);
      background-color: var(--green-dark);
    }
  }
  .btn-modal-yes {
    margin-right: 3rem;
    :hover {
      background-color: var(--red-dark);
      color: var(--white);
    }
  }
  .btn-modal-no {
    :hover {
      background-color: var(--green-dark);
      color: var(--white);
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
    @media (min-width: 1126px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 0 auto;
      max-width: var(--max-width);
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
export default Agents
