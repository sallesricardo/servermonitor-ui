import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 2000,
});

export default {
  getHostname() {
    return apiClient.get("/hostname");
  },
  getResource(resource) {
    return apiClient.get("/" + resource);
  },
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  },
};
