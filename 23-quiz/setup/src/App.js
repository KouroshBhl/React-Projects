import React from 'react'
import SetupForm from './components/SetupForm'
import { useGlobalContext } from './helper/context'
import Loading from './components/Loading'
import Question from './components/Question'
import Modal from './components/Modal'

function App() {
  const { loading, isFormSubmited, showModal } = useGlobalContext()
  return (
    <main>
      {loading && <Loading />}
      {!loading && !isFormSubmited && <SetupForm />}
      {!loading && isFormSubmited && <Question />}
      {showModal && <Modal />}
    </main>
  )
}

export default App
