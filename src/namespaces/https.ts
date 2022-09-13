import axios from "axios";

export namespace Https {

    export async function get(url: string) {
        return await axios.get(url, { withCredentials: true })
            .then(resp => resp.data)
    }

    export async function post(url: string, data: any) {
        return await axios.post(url, data, { withCredentials: true })
            .then(resp => resp.data)
    }

    export async function patch(url: string, data: any) {
        return await axios.patch(url, data, { withCredentials: true })
            .then(resp => resp.data)
    }
}