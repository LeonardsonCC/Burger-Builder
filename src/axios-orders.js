import axios from "axios";

const instance = axios.create({
    baseURL: "https://burgerbuilder-leonardsoncc.firebaseio.com/",
});

export default instance;
