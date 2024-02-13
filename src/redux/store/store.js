import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from '../reducers'

const store = configureStore({
 reducer: {
  alert: alertSlice
 },
})

export default store
