import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from "./loaderSlice"

export default configureStore({
	reducer:{
	loader:loaderReducer
  }	
})