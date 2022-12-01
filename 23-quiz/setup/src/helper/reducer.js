const reducer = function (state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload.data.trivia_categories,
        loading: false,
      }

    case 'ERROR':
      return { ...state, isError: true }

    case 'SELECT_QUESTION_NUMBER':
      return { ...state, questionsNum: +action.payload, loading: false }

    case 'SELECT_CATEGORY':
      return { ...state, category: action.payload, loading: false }

    case 'SELECT_DIFFICULTY':
      return { ...state, difficulty: action.payload, loading: false }

    case 'GET_QUESTIONS':
      return {
        ...state,
        loading: false,
        results: action.payload.data.results,
        isFormSubmited: true,
        isError: false,
      }

    case 'CHECK_ANSWER':
      // console.log(state.questionPage + 1, state.questionsNum)
      console.log(state.correctAnswers)
      if (state.questionPage + 1 === state.questionsNum) {
        if (action.payload === state.results[state.questionPage].correct_answer)
          return {
            ...state,
            correctAnswers: state.correctAnswers + 1,
            questionPage: 0,
            showModal: true,
          }
        return { ...state, questionPage: 0, showModal: true }
      }
      if (action.payload === state.results[state.questionPage].correct_answer) {
        console.log('OK')
        return {
          ...state,
          correctAnswers: state.correctAnswers + 1,
          questionPage: state.questionPage + 1,
        }
      }
      console.log('Clicked')
      return { ...state, questionPage: state.questionPage + 1 }

    case 'PLAY_AGAIN':
      return {
        ...state,
        showModal: false,
        correctAnswers: 0,
        isFormSubmited: false,
      }

    default:
      return state
  }
}

const initalState = {
  results: [],
  loading: true,
  categories: [],
  category: 9,
  difficulty: 'easy',
  questionsNum: 10,
  isFormSubmited: false,
  questionPage: 0,
  answers: [],
  correctAnswers: 0,
  showModal: false,
  isError: false,
}

export { reducer, initalState }
