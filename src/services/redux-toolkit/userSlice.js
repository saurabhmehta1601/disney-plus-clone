import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:'user',
    initialState : {name:"",email:"",avatar:""},
    reducers : {
        login : (state,action) =>{
            state = action.payload
            return state 
        },
        logout : (state) =>{
          state={name:"",email:"",avatar:""}
          return state 
        } 
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer