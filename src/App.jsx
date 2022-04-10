import { useState } from 'react';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
// import notes from './notes';

function App() {
	const [notes, setNotes] = useState([]);

	const addNotes = note => {
		setNotes(prevNotes => {
			return [...prevNotes, note];
		});
	};

	const deleteNote = id => {
		setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
	};

	return (
		<div>
			<Header />
			<CreateNote onSave={addNotes} />

			{notes.map(note => (
				<Note
					key={note.id}
					id={note.id}
					title={note.title}
					content={note.content}
					onDelete={deleteNote}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
