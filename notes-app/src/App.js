import React from 'react';
import './Reset.css'
import './App.css';
import Header from './components/Header'
import NoteBox from './components/Notebox'
import axios from 'axios'
import CreateNew from './components/CreateNew';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userNotes: [],
      noteClicked: false,
      creating: false,
      
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.createToggle = this.createToggle.bind(this)
    this.createNew = this.createNew.bind(this)
    this.editNote = this.editNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }
  componentDidMount() { 
    axios.get('/api/notes')
      .then(res => {
        this.setState({ userNotes: res.data })
    })
  }

  createNew(title, date, note) { 
    const body = {title, date, note}
    axios.post('api/notes', body)
      .then(res => {
        this.setState({
          userNotes: res.data
        })
      })
    this.createToggle()
  }
  createToggle() { 
    const {creating} = this.state
    this.setState({
      creating: !creating
    })
}
  editNote(id, title, date, note) { 
    const body = {title, date, note}
    axios.put(`/api/notes/${id}`, body)
      .then((res => {
      this.setState({userNotes: res.data})
      }))
  }


  deleteNote(id) { }

  dateSort() { }
  nameSort() { }
  
  
  render() {
    const { userNotes } = this.state
    const { creating } = this.state

    const notes = this.state.userNotes.map(note => {
      return (
        
        <NoteBox key={note.id}
          notes={note}
          notesArr={userNotes}
          editNote={this.editNote}
          delete={this.deleteNote}
          
        />

        
        
        )
      })
      
      console.log(this.state.userNotes)
      return <div className="App">
      <Header
        notes={userNotes}
      />
      
      <CreateNew
        notes={userNotes}
        addNote={this.createNew}
        isCreating={creating}
        toggle={this.createToggle}

      
      />
      
      {notes}
     

      

       
    </div>
  }
}
export default App;
