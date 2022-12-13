import type { AxiosInstance } from "axios";
import axios from "axios";
import type { devAxiosRequestConfig } from "../types";

class Request {
  instance: AxiosInstance;

  constructor(config: devAxiosRequestConfig) {
    this.instance = axios.create(config);
    //请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.error("request error====", error);
        return error;
      }
    );

    //响应拦截器
    this.instance.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        console.error("response error====", error);
        return error;
      }
    );

    //添加自定义拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  request<T = any>(config: devAxiosRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config);
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(config: devAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "get" });
  }

  post<T = any>(config: devAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "post" });
  }
}

export default Request;
