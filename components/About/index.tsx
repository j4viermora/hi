import React from 'react';

export const About = () => {
	return (
		<>
			<section className='section is-large' id='about'>
				<h2 className='title'>Sobre mí</h2>
				<p
					style={{
						maxWidth: '60vw',
					}}>
					Apasionado por la tecnología, la web y las tecnologías,
					frontend, me encanta ReactJs, los atardeceres a orillas del
					mar y el cine. Actualmente me desempeño como frontend
					developer en{' '}
					<a
						href='https://www.alegra.com/'
						rel='noopener noreferrer'
						target={'_blank'}>
						Alegra.
					</a>
				</p>
			</section>
		</>
	);
};
