import React, { SyntheticEvent, useState } from 'react';

export const Contact = () => {
	const emailTo = 'j4viermora@gmail.com';

	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = form;

	const handleChange = ({ target }: any) => {
		setForm({
			...form,
			[target.id]: target.value,
		});
	};

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		document.getElementById('emailTo')?.click();
	};

	return (
		<section className='section is-medium' id='contact'>
			<h3 className='title'>Contacto</h3>
			<p>Si quieres trabajar conmigo</p>
			<form
				onSubmit={handleSubmit}
				className='mt-5'
				style={{
					maxWidth: ' 500px',
				}}>
				<div className='field'>
					<label htmlFor='name' className='label'>
						Nombre
					</label>
					<div className='control'>
						<input
							id='name'
							className='input'
							type='text'
							required
							placeholder='Pedro Tapia'
							value={name}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='field'>
					<label htmlFor='name' className='label'>
						Email
					</label>
					<div className='control'>
						<input
							id='email'
							className='input'
							type='email'
							placeholder='pedro@gotham.com'
							required
							value={email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='field'>
					<label className='label'>Mensaje</label>
					<div className='control'>
						<textarea
							id='message'
							className='textarea'
							placeholder='Escribe tu mensaje...'
							value={message}
							onChange={handleChange}></textarea>
					</div>
				</div>

				<button className='button'>Enviar mensajes</button>
				<a
					id='emailTo'
					href={`mailto:${emailTo}?body=${message}&subject=${name}`}></a>
			</form>
		</section>
	);
};
