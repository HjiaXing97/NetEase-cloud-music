import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface devInterceptors {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (error: any) => any;
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse;
  responseFailureFn?: (error: any) => any;
}

//扩展AxiosRequestConfig接口，使创建Request实例的适合可以创建自定义拦截器
export interface devAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: devInterceptors;
}