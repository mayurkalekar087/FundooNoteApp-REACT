/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import NoteOptions from "../noteOptions/noteOptions";
import Services from "../../services/noteServices";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./addNote.scss";


export default function AddNote(props) {
    const [showTitle, titleDisplay] = React.useState(props.editOpen);
    const [noteData, setNoteData] = React.useState(props.noteDetail);
  
    const clickedNote = () => {
      titleDisplay(true);
    };
  
    const noteChangeHandler = (e, key) => {
      setNoteData({ ...noteData, [key]: e.target.value });
    }
  
    const resetHandler = () => {
      let key = ["title", "description"]
      key.map((key) => (setNoteData({ [key]: "" })));
    }
  
    const saveNote = () => {
      const formval = {
        title: noteData?.title,
        description: noteData?.description,
      };
        Services.addNote(formval)
          .then((data) => {
            toast.success("Notes created");
            titleDisplay(false);
            resetHandler();
            props.getall();
          })
          .catch((err) => {
            toast.error("Note not created");
          });
      }
  
    return (
      <div
        className="addNotesMain"
      >
        <div className="notesField" onClick={clickedNote}>
          <div
            className="addNoteField"
            style={{ display: showTitle ? "block" : "none" }}
          >
            <div className="titleInput" data-testid="title" >
              <InputBase className="titleName"
                placeholder="Title"
                value={noteData?.title}
                fullWidth
                multiline
                onChange={(e) => noteChangeHandler(e, "title")}
              />
            </div>
          </div>
          <div className="simpleNoteShow"
            style={{ display: setNoteData ? "block" : "none" }}
          >
            <div className="noteInput" data-testid="description">
              <InputBase
                placeholder="Take a notes"
                value={noteData?.description}
                fullWidth
                multiline
                onChange={(e) => noteChangeHandler(e, "description")}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="addNoteOptions">
            <NoteOptions />
            <div className="closeNotes">
              <IconButton className="closeNotes" data-testid="submit" onClick={saveNote}> close  </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }