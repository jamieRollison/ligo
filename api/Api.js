import axios from "axios";

const Api = axios.create({
  baseURL: "https://www.ligoismore.tech/api",
});

const apiRequest = async (
  /** @type {string} */ method,
  /** @type {any} */ url,
  /** @type {any} */ data
) => {
  const response = await Api({
    method,
    url,
    data,
  });
  return response;
};

const get = async (/** @type {any} */ url, /** @type {any} */ req) => {
  return await apiRequest("get", url, req);
};

const post = async (/** @type {any} */ url, /** @type {any} */ req) => {
  return await apiRequest("post", url, req);
};

const API = {
  get,
  post,
};

export default API;
