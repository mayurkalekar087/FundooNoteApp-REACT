import http from "./config";

export const register = (userData) => {
  console.log(userData);
  return http.post("/register", userData);
};
export const login = (loginData) => {
    return http.post("/signin", loginData);
};