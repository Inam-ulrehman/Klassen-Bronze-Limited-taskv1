import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'animate.css'

import {
  handleFormToggleButton,
  handleFormValue,
  registerUser,
  loginUser,
} from '../features/user/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state)
  const { isLogin, isLoginToggle } = user

  // handleSubmit
  const handleSubmit = (e) => {
    const { name, email, password, isMember } = user
    e.preventDefault()
    if (!name || !password) {
      toast.error('please fill in all the fields.', {
        position: 'top-center',
      })
    }
    if (isMember) {
      dispatch(loginUser({ name, password }))

      return
    }
    dispatch(registerUser({ email, name, password }))
    return
  }

  // handleChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch(handleFormValue({ name, value }))
  }

  // const handle toggleButton

  const toggleButton = (e) => {
    dispatch(handleFormToggleButton())
  }
  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)

      return
    }
    // eslint-disable-next-line
  }, [isLoginToggle])
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>{user.isMember ? 'Login' : 'Register'}</h3>
        {/* email input */}

        {!user.isMember && (
          <FormRow
            type='email'
            name='email'
            id='email'
            value={user.email}
            handleChange={handleChange}
          />
        )}

        {/* name input */}
        <FormRow
          type='name'
          name='name'
          id='name'
          value={user.name}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          id='password'
          value={user.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {user.isMember ? 'Are you register ? ' : 'Are you Member ? '}{' '}
          <button className='btn' type='button' onClick={toggleButton}>
            {user.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
