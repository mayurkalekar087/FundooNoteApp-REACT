import React from "react";
import AddNotes from "./addNote";
import DisplayNotes from "../displayCard/displayCard";
import Services from "../../services/noteServices";
import "./note.scss";

export default function Notes(props) {
    const [notes, setNotes] = React.useState([]);
  
    const getAllNotes = () => {
      Services.getNotes()
        .then((res) => {
          console.log("request data",res.data)
          const { data } = res.data
          let notes = data;
          setNotes(notes);
          console.log(notes,"allNotes");
        })
        .catch((err) => {
          console.log("error = " + err);
        });
    };
    React.useEffect(() => {
      getAllNotes();
    }, []);
  
    return (
      <div className="mainContent" data-testid="wrapper">
        <AddNotes getall={getAllNotes} />
        <DisplayNotes notes={notes} getall={getAllNotes} />
        <div></div>
      </div>
    );
  }