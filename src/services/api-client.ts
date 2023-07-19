import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"0db02b49e417479e8ee2aa21c34a244a"
    }
})