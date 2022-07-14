import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from "./loaderSlice"
import playerReducer from "./playerSlice"

export default configureStore({
	reducer:{
	loader:loaderReducer,
	player:playerReducer
  }	
})