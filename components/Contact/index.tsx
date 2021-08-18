import React from 'react';

export const Contact = () => {
	return (
		<section className='section is-medium' id='contact'>
			<h3 className='title'>Contact</h3>
			<p>
				If you got here you may have any questions, then do not hesitate
				to contact me
			</p>
			<form
				className='mt-5'
				style={{
					maxWidth: ' 500px',
				}}>
				<div className='field'>
					<label htmlFor='name' className='label'>
						Name
					</label>
					<div className='control'>
						<input
							id='name'
							className='input'
							type='text'
							required
							placeholder='Pedro Tapia'
						/>
					</div>
				</div>

				<div className='field'>
					<label htmlFor='name' className='label'>
						Email
					</label>
					<div className='control'>
						<input
							id='name'
							className='input'
							type='email'
							placeholder='pedro@cuidadgotica.com'
							required
						/>
					</div>
				</div>

				<div className='field'>
					<label htmlFor='name' className='label'>
						Subject
					</label>
					<div className='control'>
						<input
							id='name'
							className='input'
							type='text'
							placeholder='Future of gothic city without batman'
							required
						/>
					</div>
				</div>
				<div className='field'>
					<label className='label'>Message</label>
					<div className='control'>
						<textarea
							className='textarea'
							placeholder='Hi Javier, since Batman has been missing Gordon for a week and I thought it was good to ask for your help'></textarea>
					</div>
				</div>

				<button className='button'>Send message</button>
			</form>
		</section>
	);
};
