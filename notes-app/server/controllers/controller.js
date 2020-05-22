const notes = [{ id: 1, title: '', date: '', note: '' }]
let id = 6

module.exports = {
    getAllNotes: (req, res) => { 
        res.status(200).send()
    },
    editNote: (req, res) => { },
    createNewNote: (req, res) => { },
    deleteNote: (req, res) => { }
}
