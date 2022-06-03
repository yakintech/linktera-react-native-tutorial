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

    getById: () => {

    },
    delete: () => {

    },
    add: () => {

    },
    update: () => {

    }

}