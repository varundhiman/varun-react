import axios, { AxiosRequestConfig } from 'axios';

export default class HttpService {

    static get(url: string, requestOptions: AxiosRequestConfig | undefined ) {
        const observable = axios.get('/varunweb' + url, requestOptions);
        return observable.then((res)=>{
            console.log(res);
            return res.data;
        }).catch((err)=>{
            console.log(err);
            return Promise.reject(err);
        });
    }

    static post(url: string, data: any ) {
        const observable = axios.post(url, data);
        return observable.then((res)=>{
            return res;
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }
}