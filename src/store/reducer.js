

//assign a random userId
//In real life scenario this would be from database
const initialState = {
  userName: '',
  userId: Math.floor(Math.random() * 1000)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...initialState,
        userName: action.userName
      }
    default:
      return state;

  }
}


export default reducer
