import React from 'react'
import axios from 'axios'

const URL = "http://localhost:8000"
async function authSignup(
    data: Object
) {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        return console.log("error from axios signup", error)
    }
}

export default authSignup;




