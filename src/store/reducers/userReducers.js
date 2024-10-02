import { createReducer } from '@reduxjs/toolkit';
import login    from "../actions/userActions"

const initialStore = {
    userData: null,
    token: null
}

const userReducer = createReducer (initialStore, (builder) =>{
    builder.
    addCase(login, (state, action )=>{
        const aux = {...state}
        aux.userData = action.payload.user
        aux.token = action.payload.token
        return aux
    })
})

export default userReducer