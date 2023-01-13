import React from 'react'
import axios from 'axios'

const URL = "http://localhost:8000"
export async function authSignup(
    data: Object
) {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        return console.log("error from axios signup", error)
    }
}
export async function authLogin(
    data: Object) {
    try {
        const reponces: any = axios.post(`${URL}/login`, data);
        return reponces;

    } catch (error) {
        return console.log("error from axios login")
    }
}







