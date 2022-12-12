import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface devInterceptors<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (error: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (error: any) => any;
}

//扩展AxiosRequestConfig接口，使创建Request实例的适合可以创建自定义拦截器
export interface devAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: devInterceptors<T>;
}
