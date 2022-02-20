import axios from 'axios';

export default function httpInstance({ baseURL, timeout, ...attrs }) {
    const instance = axios.create({
        baseURL,
        timeout,
        ...attrs
    })
    return instance;
}