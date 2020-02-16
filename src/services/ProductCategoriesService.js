import { ApiClient } from "./ApiClient";

let apiClient = new ApiClient();

export default {
  get() {
    return apiClient.get("product_categories/");
  }
};
