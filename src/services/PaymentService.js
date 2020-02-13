import { ApiClient } from "./ApiClient";

let apiClient = new ApiClient();

export default {
  post(body) {
    return apiClient.post("sales/", body);
  }
};
