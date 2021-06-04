import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:'loggedUser',
    initialState : {
        name: '',
        email: '',
        avatar : ''
    },
    reducers : {
        login : (state,action) =>{
            const {name,email,avatar} = action.payload 
            state.name = name
            state.email = email
            state.avatar = avatar
        },
        logout : () =>{
            state.name=state.email = state.avatar = ''
        } 
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer