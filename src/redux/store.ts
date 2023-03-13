import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/user/slice'

export const store = configureStore({
  reducer: {
    user
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const UseAppDispatch = () => useDispatch<AppDispatch>();