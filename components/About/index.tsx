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
					Software developer, apasionado de la tecnología, me gusta construir software mantenible y escalable, actualmente soy Senior Frontend Developer en {' '}
					<a
						href='https://hacku.com/'
						rel='noopener noreferrer'
						target={'_blank'}>
						hackU.
					</a>
				</p>
			</section>
		</>
	);
};
