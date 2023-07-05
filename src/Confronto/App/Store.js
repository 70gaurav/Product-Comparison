import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "../Slice/compareSlice.js"

export default configureStore({
    reducer:{
        compare : compareReducer
    }
})