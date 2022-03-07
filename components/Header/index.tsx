import React from 'react';

interface Developer {
	name: string;
	role: string;
}

export const Header = ({ name, role }: Developer) => {
	return (
		<>
			<header className='section'>
				<div className='container__title'>
					<img
						className='mb-5'
						src='https://avatars.githubusercontent.com/u/55900303?v=4'
					/>
					<h2 className='title is-2'>Hola, soy {name}</h2>
					<h3 className='title is-4'>{role}</h3>
				</div>
			</header>
			<style jsx>{`
				header {
					height: 93vh;
					width: 100vw;
				}
				.container__title {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: 100%;
				}
				img {
					border-radius: 50%;
					height: 250px;
				}

				@media (max-width: 650px) {
					img {
						height: 150px;
					}
				}
			`}</style>
		</>
	);
};
