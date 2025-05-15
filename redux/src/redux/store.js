import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/couterslice'
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})