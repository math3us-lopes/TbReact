/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/"
})