import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { devAxiosRequestConfig } from "../types";

class Request {
  instance: AxiosInstance;

  constructor(config: devAxiosRequestConfig) {
    this.instance = axios.create(config);
    //请求拦截器
    this.instance.interceptors.request.use((config) => {
      return config;
    }, error => {
      console.error("request error====", error);
      return error;
    });

    //响应拦截器
    this.instance.interceptors.response.use((config) => {
      return config;
    }, error => {
      console.error("response error====", error);
      return error;
    });

    //添加自定义拦截器
    config.interceptors?.requestSuccessFn &&
    this.instance.interceptors.request.use(
      config.interceptors.requestSuccessFn,
      config.interceptors.requestFailureFn,
    );

    config.interceptors?.responseSuccessFn &&
    this.instance.interceptors.response.use(
      config.interceptors.responseSuccessFn,
      config.interceptors.responseFailureFn,
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;