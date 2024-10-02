import { createAction } from "@reduxjs/toolkit";

const login = createAction("login", (data) =>{
    return{
        user : data
    }
})

export default login