//封装axios
import axios, {type AxiosRequestConfig} from "axios";

//axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.baseURL = localStorage.getItem('BASE_URL')?.toString();
axios.defaults.timeout = 20 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true; //跨域请求会携带用户凭证

axios.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        config.params = {
            ...config.params,
            t: Date.now()
        }
        console.log('请求成功:' + Date.now())
        return config
    },
    function(error) {
        console.log('请求错误' + error)
        return Promise.reject(error)
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log('响应成功:' + Date.now())
        return response
    },
    function(error) {
        console.log('响应错误' + error)
        return Promise.reject(error)
    }
);

interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?:string
}

interface Http {
    get<T>(url: string, params?: unknown): Promise<T>
    post<T>(url: string, params?: unknown): Promise<T>
    put<T>(url: string, params: unknown): Promise<T>
    upload<T>(url: string, params: unknown): Promise<T>
    delete<T>(url: string, params: unknown): Promise<T>
    download<T>(url: string): void
}

const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params})
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)               
                    })
                })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url , JSON.stringify(params))
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
    put(url, params) {
        return new Promise((resolve, reject) => {
            axios.put(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
    upload(url, file) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, file, {
                    headers: {"Content-Type": "multipart/form-data"},
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        })
    },
   delete(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, {params})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        })
    },
   download(url) {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        iframe.onload = function() {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    }
}

export default http