import axios from "axios";

const getClient = () => {
  const options = {
    baseURL: "http://localhost:8080/",
    headers: {
      Accept: "application/json"
    }
  };

  const client = axios.create(options);
  return client;
};

export class ApiClient {
  constructor() {
    this.client = getClient();
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => response.data)
      .catch(error => error);
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => response.data)
      .catch(error => error);
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => response.data)
      .catch(error => error);
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => response.data)
      .catch(error => error);
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => response.data)
      .catch(error => error);
  }
}
