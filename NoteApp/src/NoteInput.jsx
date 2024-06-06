import React from 'react';

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            title: '',
            body: '',
            createdAt: new Date(),
            archihved: false,
            chars_left: 50,
            
        }


        

        this.onInputBodyEventHandler = this.onInputBodyEventHandler.bind(this);
        this.onInputTitleEventHandler = this.onInputTitleEventHandler.bind(this);
        this.onInputSubmitEventHandler = this.onInputSubmitEventHandler.bind(this);
    }

    // handleWordCount = event => {
    //     const charCount = event.target.value.length;
    //     const maxChar = this.state.max_char;
    //     const charLength = maxChar - charCount;
    //     this.setState({ chars_left: charLength });
    // }

    
    onInputTitleEventHandler(event){
        this.setState(() => {
            return {
                title : event.target.value,
            }
        });

    }

    onInputBodyEventHandler(event){
        this.setState(() => {
            return {
                body : event.target.value,
            }
        })
    }

    onInputSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render(){
        return(
            <div className='' >
                
                <form onSubmit={this.onInputSubmitEventHandler}>
                <div className='w-1/2 grid m-auto justify-items-center bg-white p-4 rounded-lg shadow-md space-y-4' >
                <h2 className=''>Tambah Catatan</h2>
                
                <small>{this.state.title.length}/50 Karakter</small>
                    <input 
                    className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-600' 
                    type='text' 
                    placeholder='Judul Catatan'
                    value={this.state.title}
                    onChange={this.onInputTitleEventHandler}
                    maxLength={50}
                    required
                    />
                    <textarea
                    className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-600'
                    type='text'
                    placeholder='Isi Catatan'
                    value={this.state.body}
                    onChange={this.onInputBodyEventHandler}
                    required
                    />
                    <div>
                        <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700' type='submit'>Buat</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default NoteInput;



{/* <form className='' onSubmit={this.onInputSubmitEventHandler}>
<input type='text' placeholder='Judul Catatan' value={this.state.title} onChange={this.onInputTitleEventHandler}></input>
<textarea type='text' placeholder='Tuliskan Catatanmu di sini...' value={this.state.body} onChange={this.onInputBodyEventHandler}></textarea>
<button type='submit'>Buat</button>
</form> */}