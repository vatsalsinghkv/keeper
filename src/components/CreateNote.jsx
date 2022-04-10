import { useState } from 'react';
// import SendIcon from '@mui/icons-material/Send';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const getId = () => `id${Math.random().toString(16).slice(2)}`;

const CreateNote = ({ onSave }) => {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const [isTyping, setIsTyping] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
		onSave({ id: getId(), ...note });

		setNote({
			title: '',
			content: '',
		});

		setIsTyping(false);
	};

	const changeHandler = e => {
		const { name, value } = e.target;
		setNote(prevNote => {
			return { ...prevNote, [name]: value };
		});
	};

	return (
		<div>
			<form onSubmit={submitHandler} className="create-note">
				{
					// Conditional Rendering
					isTyping && (
						<input
							onChange={changeHandler}
							name="title"
							placeholder="Title"
							value={note.title}
							required
							autoFocus
						/>
					)
				}

				<textarea
					onChange={changeHandler}
					onFocus={() => setIsTyping(true)}
					name="content"
					placeholder="Take a note..."
					rows={isTyping ? 3 : 1}
					value={note.content}
					required
				/>

				<Zoom in={isTyping}>
					<Fab type="submit">
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default CreateNote;
