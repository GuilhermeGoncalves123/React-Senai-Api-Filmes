import axios from "axios";
import { useEffect } from "react";

const apiPorta = "5063"

const apiLocal = `http://localhost:${apiPorta}/api`;

const api = axios.create({
    baseURL: apiLocal

})
useEffect(() => {
     alert("bom dia")
}, [])

export default api;