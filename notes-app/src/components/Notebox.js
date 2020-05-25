import React from 'react';
import Edit from './Edit'

export default function NoteBoxes(props) {
    return (
        <div id="boxes">
            {console.log(props.editNote)}
            <div className="notes">
                <Edit
                    postedNotes={props.notesArr}
                    notes={props.notes}
                    editNote={props.editNote}
                    toggleEdit={props.toggleEdit}    
                    delete={props.delete}
                    title={props.notes.title}
                    date={props.notes.date}
                    content={props.notes.note}
                />
                <div className="wordBox">
                        <h3 className="note-title">{props.notes.title}</h3>
                    <h4 className="note-date">{props.notes.date}</h4>
                    <h6 className="note-content" maxLength="220">{props.notes.note}</h6>
                </div>
            </div>
            
        </div>
        )
    
}