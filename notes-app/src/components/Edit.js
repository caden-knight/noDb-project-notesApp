import React, { Component } from 'react';
import editBtn from '../buttons/editBtn.png'
import deleteBtn from '../buttons/deleteBtn.png'

class Edit extends Component {
    constructor() {
        super();
        this.state = {  
            editInputTitle: "",
            editInputDate: "",
            editInputNote: "",
            editing: false,
        }
    }

    editTheNote() {
        this.props.
        this.toggleEditing()
    }
    toggleEditing() {
        const {editing} = this.state
        this.setState({
            editing: !editing
        })
    }
    editTitle(title) {
        this.setState({
            editInputTitle: title.target.value
        })
    }
    
    editDate(date) {
        this.setState({
            editInputDate: date.target.value
        })
    }
    
    editContent(note) {
        this.setState({
            editInputNote: note.target.value
        })
    }
    
    render() {
        const noteId = this.props.notes.id
        const editedTitle = this.state.editInputTitle
        const editedDate = this.state.editInputDate
        const editedNote = this.state.editInputNote
        const {editing} = this.state
        return (  
            <div className="edit-delete">
                {!editing ? <img src={editBtn}className="editBtn" onClick={() => this.toggleEditing()} alt="edit-btn" /> :
                    <div className="edit-field">
                        <input onChange={(title) => this.editTitle(title)} maxLength="20" placeholder="Title (max 20 characters)" className="inp edit-title"></input>
                        <input onChange={(date) => this.editDate(date)} placeholder="MM/DD/YYYY" className="inp edit-date"></input>
                        <input onChange={(note) => this.editContent(note)} placeholder="Your note goes here..." className="inp edit-note"></input>
                        <button onClick={() => { this.props.editNote(noteId, editedTitle, editedDate, editedNote); this.toggleEditing() } } className="submit">Edit Note</button>
                        <button onClick={() => { this.toggleEditing()}} className="cancel">Cancel</button>
        </div>}
                <img className="btn deleteBtn" src={deleteBtn} alt="delete" />
            </div>
        );
    }
}
 
export default Edit;