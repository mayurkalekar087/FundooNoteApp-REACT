//import Axios from "axios";
import http from "./config";
class UserNoteServices {
    static addNote = (data) => {
        const token = localStorage.getItem("token");
        return http.post("http://localhost:3000/createnotes", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      static getNotes = () => {
        const token = localStorage.getItem("token");
        return http.get("http://localhost:3000/getnotes", {
          headers: { Authorization: `Bearer ${token}` },
        });
      };
    static forgotPassword = (data) => {
        return http.post("http://localhost:3000/forgotPassword", data);
      };

      static resetPassword = (data, token) => {
        return http.post(`http://localhost:3000/resetpassword/${token}`, data);
      };
    }
    export default UserNoteServices;
