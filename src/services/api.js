import http from "./config";

export const register = (userDetails) => {
  return http.post("/register", userDetails);
};
export const login = (data) => {
    return http.post("/login", data);
};