import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
 alert: '',
}

export const alertSlice = createSlice({
 name: 'alert',
 initialState,
 reducers: {
  info: (state, {payload}) => {
   // Redux Toolkit allows us to write "mutating" logic in reducers. It
   // doesn't actually mutate the state because it uses the Immer library,
   // which detects changes to a "draft state" and produces a brand new
   // immutable state based off those changes
   state.alert = 'Info'
   toast(payload, {autoClose: 3000})
  },
  error: (state) => {
   state.alert = 'Error'
   toast.error('Error occurred!', {autoClose: 3000})
  },
 },
})

// Action creators are generated for each case reducer function
export const {info, error} = alertSlice.actions

export default alertSlice.reducer
