import axios from 'axios';
//
// const delay = (sec) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, sec * 1000);
//     })
// }

export const GET = async (url: string) => {
    // await delay(5)
    return await axios.get(url).then(resp => resp.data);
}
