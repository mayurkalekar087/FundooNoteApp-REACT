import http from "./config";

export const register = (userDetails) => {
  return http.post("/register", userDetails);
};
export const login = (data) => {
    return http.post("/login", data);
};
// export const forgot = (data) => {
//     return http.post("/forgotPassword", data);
// };
// export const resetPassword = (data,token) => {
//   return http.post(`/resetPassword/:${token}`, data);
// };
