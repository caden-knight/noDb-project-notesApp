import React, { Component } from 'react';
import editBtn from '../buttons/editBtn.svg'
import deleteBtn from '../buttons/deleteBtn.svg'

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
        const { editing } = this.state
        const title = this.props.title
        const content = this.props.content
        return (  
            <div className="edit-delete">

                {!editing ?
                    <div className="buttons">
                        <img src={editBtn} className="btn editBtn" onClick={() => { this.toggleEditing(); }} alt="edit-btn" />
                        <img onClick={() =>  this.props.delete(noteId)  } className="btn deleteBtn" src={deleteBtn} alt="delete" /> 
                    </div>
                    :
                    <form className="edit-field">
                        
                        <input onChange={(title) => this.editTitle(title)} maxLength="20" type="text" defaultValue={title} className="edit-inp edit-title"></input>
                        
                        <input onChange={(date) => this.editDate(date)} type="date" className="edit-inp edit-date"></input>
                        <textarea onChange={(note) => this.editContent(note)} defaultValue={content} maxLength="220"  className="edit-inp edit-note"></textarea>
                        <button onClick={() => { this.toggleEditing()}} className="edit-btn edit-cancel">Cancel</button>
                        <button onClick={() => { this.props.editNote(noteId, editedTitle, editedDate, editedNote); this.toggleEditing() } } className="edit-btn edit-submit">Finish</button>
        </form>}
        
       
            </div>
        );
    }
}
 
export default Edit;