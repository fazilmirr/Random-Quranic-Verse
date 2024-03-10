import {configureStore} from "@reduxjs/toolkit"
import AyahSlice from "./AyahSlice"

const store=configureStore({
  reducer:{
    AyahData:AyahSlice.reducer
  }
})
export default store