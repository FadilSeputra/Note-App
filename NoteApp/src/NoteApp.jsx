import React from 'react';
import NoteList from './NoteList';
import { getInitialData} from '../src/utils/index';
import NoteInput from './NoteInput';


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

        onAddNoteHandler({ title, body, createdAt, archived }){
            this.setState((prevState) => {
                
                return {
                    notes: [
                        ...prevState.notes,
                        {
                            id: + new Date(),
                            title,
                            body,
                            createdAt,
                            archived
                        }
                    ]
                }
            });
        }
        render(){
            return (
                <div>
                    <h1 className='mb-4 text-center text-4xl text-slate-50 mt-5'>Note App</h1>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h1 className='text-4xl text-center text-slate-50 mt-5'>Daftar Catatan</h1>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
            );
        }
    }

export default NoteApp;