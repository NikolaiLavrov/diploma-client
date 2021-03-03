import axios from 'axios';
import {BASE_URL} from "../config";

export async function register(email, password) {
    return axios.post(`${BASE_URL}/register`, {
        email, password
    })
}

export async function login(email, password) {
    return axios.post(`${BASE_URL}/login`, {
        email, password
    })
}