/* eslint-disable react/style-prop-object */
import React from "react";
import NoteOptions from "../../component/noteOptions/noteOptions";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../createNote/addNote";
import Typography from "@material-ui/core/Typography";
import "./displayCard.scss";

export default function DisplayNotes(props) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [clr, setClr] = React.useState("#fafafa");
  

  const [noteData, setNoteData] = React.useState({ title: '', description: '', noteId: '' });

  const setDelete = () => {
    dialogClose();
    setOpen(false);
  };
  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true);
    setClr(data.color);
    setNoteData(data);
    
    setOpen(true);
  };

  const storeOption = (e, data) => {
    e.stopPropagation();
    setNoteData(data);
  };

  const dialogClose = () => {
    setOpen(false);
  };
  const Note = () => {
    //console.log(" props.notes :: ", props.notes.rows);
    //console.log(props.notes.rows.length,"length")
    return (
      <div className="row">
      <div className="column">
      <div className="AllNotes">
        {props.notes.rows &&
          props.notes.rows.map((data) => (
            <div
              key={data.note_id}
              className="noteBlock"
              style={{ backgroundColor: data.color }}
            >
              <div className="inputBlock" onClick={(e) => dialogOpen(e, data)}>
                <Typography className="textTitle" >
                  {data.title}
                </Typography>
                <Typography className="noteText">
                  {data.description}
                </Typography>
              </div>
              <div className="optionContainer">
                <div
                  onMouseEnter={(e) => {
                    storeOption(e, data);
                    setClr(clr);
                  }}
                  onMouseOver={setEdit(true)}
                  className="noteOption"
                >
                  <NoteOptions
                    setDelete={setDelete}
                    setColor={clr}
                    setClr={setClr}
                    editId={data.note_id}
                    noteDetail={noteData}
                    setEdited={edit}
                    getall={props.getall}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
      </div>
    );
  };

  return (
    <div className="mainContent">
      <div className="displayNotes">
        <Note />
      </div>
      <div>
        <Dialog open={open} onClose={dialogClose}>
          <AddNote
            setEdited={edit}
            dialogOff={dialogClose}
            getall={props.getall}
            editOpen={open}
            noteDetail={noteData}
            editColor={clr}
          />
        </Dialog>
      </div>
    </div>
  );
}