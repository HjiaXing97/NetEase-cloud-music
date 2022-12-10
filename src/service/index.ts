import Request from "src/service/request";
import { TIME_OUT, BASE_URL } from "./config";

const devRequest = new Request({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
});

export default devRequest;