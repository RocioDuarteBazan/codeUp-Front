import { createAction } from "@reduxjs/toolkit";

const login = createAction("login", (data) => {
    return {
        payload: { user: data }
    }
})

export default login