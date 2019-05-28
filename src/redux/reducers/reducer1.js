import { combineReducers } from 'redux'
import { stateTree } from  '../state'


function reducer(state = stateTree, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        ...state, 
        data: action.data
      }
    case 'UPDATE_TEXT':
      console.log(state.text)
      return {
        ...state, 
        text: action.text,
      }
    case 'UPLOAD_TEXT_ONGOING':
      return {
        ...state,
        textUpload: true,
      }
    case 'UPLOAD_TEXT_DONE':
      return {
        ...state,
        textUpload: false,
      }
    default:
      return state
    }
}



export default reducer