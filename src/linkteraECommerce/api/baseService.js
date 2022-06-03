import axios from "axios"
import { BASE_URL } from "../env/config"

export const baseService = {

    getAll: async (url) => {

        let responseData = [];

        await axios.get(BASE_URL + url)
            .then(res => {
                responseData = res.data
            })

        return responseData

    },

    getById: async (url, id) => {

        let responseData = {};
        await axios.get(BASE_URL + url + "/" + id)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => console.log("ERROR", err));

        return responseData;

    },
    delete: async (url, id) => {

        let responseData = {};
        await axios.delete(BASE_URL + url + "/" + id)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => console.log("ERROR", err))

    },
    add: () => {

    },
    update: () => {

    }

}