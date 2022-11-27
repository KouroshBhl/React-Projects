import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

const reducer = function (state, action) {
  switch (action.type) {
    case 'GET_DATA':
      const { results } = action.payload.data
      let name = ''
      const data = results.map((item) => {
        name = `${item.name.first} ${item.name.last}`
        return {
          email: item.email,
          phone: item.cell,
          street: item.location.street.name,
          name,
          password: item.login.password,
          img: item.picture.thumbnail,
          age: item.dob.age,
        }
      })

      return { ...state, data: data, desc: name, loading: false }

    case 'CHANGE_DATA':
      return {
        ...state,
        value: action.payload,
        desc: state.data[0][action.payload],
      }

    case 'LOADING':
      return { ...state, loading: true }

    default:
      return state
  }
}

const initialState = {
  data: [],
  value: 'name',
  desc: '',
  loading: false,
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = async function () {
    dispatch({ type: 'LOADING' })
    try {
      const data = await axios({ url, headers: { Accept: 'application/json' } })
      dispatch({ type: 'GET_DATA', payload: data })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const hoverIconHandler = function (e) {
    if (e.target.classList.value !== 'icon') return
    const dataSet = e.target.dataset.label
    dispatch({ type: 'CHANGE_DATA', payload: dataSet })
  }

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          {state.data.length > 0 && (
            <div>
              <img src={state.data[0].img} alt='' className='user-img' />
              <p className='user-title'>My {state.value} is</p>
              <p className='user-value'>{state.desc}</p>
            </div>
          )}

          <div className='values-list' onMouseOver={hoverIconHandler}>
            <button className='icon' data-label='name'>
              <FaUser />
            </button>
            <button className='icon' data-label='email'>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age'>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label='street'>
              <FaMap />
            </button>
            <button className='icon' data-label='phone'>
              <FaPhone />
            </button>
            <button className='icon' data-label='password'>
              <FaLock />
            </button>
          </div>

          <button type='button' className='btn' onClick={() => getData()}>
            {state.loading ? 'Loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
